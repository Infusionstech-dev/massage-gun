"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { PartyPopper, Banknote, CircleCheck, Lock, Loader2 } from "lucide-react";
import { PACKAGES, SHIPPING, bn } from "@/lib/data";

export default function OrderForm() {
  const [pkg, setPkg] = useState(PACKAGES[0].id);
  const [ship, setShip] = useState(SHIPPING[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const p = PACKAGES.find((x) => x.id === pkg)!;
  const s = SHIPPING.find((x) => x.id === ship)!;
  const total = p.price + s.cost;
  const phoneOk = /^01[3-9]\d{8}$/.test(phone.trim());

  async function submit(e: FormEvent) {
    e.preventDefault();
    setTried(true);
    if (!phoneOk || !name.trim() || !addr.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, address: addr, package: pkg, shipping: ship }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done")
    return (
      <div className="thanks" style={{ display: "block" }}>
        <div className="ic"><PartyPopper size={64} /></div>
        <h2>ধন্যবাদ! আপনার অর্ডার পেয়েছি</h2>
        <p>খুব শীঘ্রই আমাদের প্রতিনিধি আপনাকে ফোন করে অর্ডার কনফার্ম করবেন।</p>
      </div>
    );

  const bad = (v: string) => (tried && !v.trim() ? { borderColor: "var(--danger)" } : undefined);

  return (
    <form onSubmit={submit} noValidate>
      <h2>অর্ডার করতে নিচের <span>ফর্মটি পূরণ করুন</span></h2>

      {PACKAGES.map((x) => (
        <label className="pkg" key={x.id}>
          <input type="radio" name="pkg" checked={pkg === x.id} onChange={() => setPkg(x.id)} />
          <Image src={x.img} alt="" width={56} height={56} />
          <div className="t">{x.label}<br /><small>{x.note}</small></div>
          <div className="p">৳{bn(x.price)}</div>
        </label>
      ))}

      <label className="f" htmlFor="name">আপনার নাম *</label>
      <input type="text" id="name" placeholder="সম্পূর্ণ নাম লিখুন" value={name} onChange={(e) => setName(e.target.value)} style={bad(name)} />

      <label className="f" htmlFor="phone">মোবাইল নম্বর *</label>
      <input type="tel" id="phone" placeholder="01XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
      {tried && !phoneOk && <p className="err" style={{ display: "block" }}>সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন</p>}

      <label className="f" htmlFor="addr">সম্পূর্ণ ঠিকানা *</label>
      <textarea id="addr" rows={2} placeholder="বাসা, রোড, থানা, জেলা" value={addr} onChange={(e) => setAddr(e.target.value)} style={bad(addr)} />

      <label className="f">ডেলিভারি এলাকা</label>
      <div className="ship">
        {SHIPPING.map((x) => (
          <label key={x.id}>
            <span><input type="radio" name="ship" checked={ship === x.id} onChange={() => setShip(x.id)} /> {x.label}</span>
            <b>৳{bn(x.cost)}</b>
          </label>
        ))}
      </div>

      <div className="summary">
        <div><span>পণ্যের মূল্য</span><span>৳{bn(p.price)}</span></div>
        <div><span>ডেলিভারি চার্জ</span><span>৳{bn(s.cost)}</span></div>
        <div className="tot"><span>সর্বমোট</span><span>৳{bn(total)}</span></div>
      </div>
      <div className="cod"><Banknote size={22} /> <span>ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে চেক করে টাকা দিন। অর্ডারের পর আমরা ফোন করে কনফার্ম করব।</span></div>
      {status === "error" && <p className="err" style={{ display: "block", marginBottom: 10 }}>অর্ডার পাঠানো যায়নি, আবার চেষ্টা করুন বা কল করুন।</p>}
      <button type="submit" className="btn block" disabled={status === "sending"}>
        {status === "sending" ? <><Loader2 size={20} className="spin" /> পাঠানো হচ্ছে...</> : <><CircleCheck size={22} /> অর্ডার কনফার্ম করুন — ৳{bn(total)}</>}
      </button>
      <p className="secure"><Lock size={13} /> আপনার তথ্য সম্পূর্ণ নিরাপদ — শুধু ডেলিভারির জন্য ব্যবহার হবে</p>
    </form>
  );
}
