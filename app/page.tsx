import { Flame, Star, ShoppingCart, ArrowDown, Truck, BadgeCheck, Sparkles, X, Check, Building2, ClipboardList, MousePointerClick, Timer, TriangleAlert, Banknote, SearchCheck, ShieldCheck, PhoneCall } from "lucide-react";
import Icon, { WhatsAppIcon } from "@/components/Icon";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import OrderForm from "@/components/OrderForm";
import { SHOP, PRICE, PAINS, FEATURES, SPECS, STEPS, FAQS, bn } from "@/lib/data";

const off = Math.round((1 - PRICE.now / PRICE.old) * 100);

export default function Home() {
  return (
    <>
      <div className="topbar"><Flame size={16} /> সীমিত সময়ের অফার — সারা বাংলাদেশে ক্যাশ অন ডেলিভারি</div>

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="pill"><span className="stars">{[0,1,2,3,4].map(i=><Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}</span> ৬ মাসের ওয়ারেন্টি সহ</span>
            <h1>ঘাড়, পিঠ আর পায়ের ব্যথা থেকে মুক্তি — <span>মাত্র ১০ মিনিটে</span></h1>
            <p className="sub">৫ হেডের পাওয়ারফুল LM-280 ম্যাসাজ গান। বাসায় বসেই পার্লারের মতো আরাম, যখন খুশি।</p>
            <ul className="checks">
              <li>একসাথে ৫টি বল — দ্বিগুণ জায়গায় ম্যাসাজ</li>
              <li>৬ স্পিড লেভেল, হালকা থেকে গভীর</li>
              <li>১৬০০mAh রিচার্জেবল ব্যাটারি</li>
            </ul>
            <div className="price-box">
              <span className="now">৳{bn(PRICE.now)}</span>
              <span className="old">৳{bn(PRICE.old)}</span>
              <span className="off">{bn(off)}% ছাড়</span>
            </div>
            <div className="cta-row">
              <a href="#order" className="btn pulse"><ShoppingCart size={20} /> এখনি অর্ডার করুন</a>
              <a href="#features" className="btn ghost">বিস্তারিত দেখুন <ArrowDown size={18} /></a>
            </div>
            <div className="mini-trust"><span><BadgeCheck size={16} /> পণ্য হাতে পেয়ে টাকা</span><span><Truck size={16} /> ২–৩ দিনে ডেলিভারি</span></div>
          </div>
          <Gallery tag={`${bn(off)}% ছাড়`} />
        </div>
      </header>

      {/* STATS */}
      <div className="stats">
        <div className="wrap">
          <div><b>৫ হেড</b><span>একসাথে ম্যাসাজ</span></div>
          <div><b>৬ স্পিড</b><span>লেভেল কন্ট্রোল</span></div>
          <div><b>১৬০০mAh</b><span>ব্যাটারি</span></div>
          <div><b>৬ মাস</b><span>ওয়ারেন্টি</span></div>
        </div>
      </div>

      {/* PROBLEM */}
      <section>
        <div className="wrap narrow">
          <span className="eyebrow">সমস্যা</span>
          <h2>আপনারও কি এই সমস্যাগুলো <span>হয়?</span></h2>
          <div className="pain">
            {PAINS.map((p) => <div key={p.t}><i><Icon name={p.ic} size={22} /></i><span>{p.t}</span></div>)}
          </div>
          <p className="solution"><Sparkles size={20} className="sol-ic" /> <b>সমাধান:</b> LM-280 একসাথে ৫টি বল দিয়ে পেশির গভীরে কাজ করে, তাই মাত্র ১০–১৫ মিনিটেই শরীর হালকা লাগে। একবার কিনলে পুরো পরিবার বছরের পর বছর ব্যবহার করতে পারবে।</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="wrap">
          <span className="eyebrow">ফিচার</span>
          <h2>কেন সবাই <span>LM-280</span> পছন্দ করছে</h2>
          <div className="grid">
            {FEATURES.map((f) => (
              <div className="feat" key={f.t}><div className="ic"><Icon name={f.ic} size={26} /></div><h3>{f.t}</h3><p>{f.d}</p></div>
            ))}
          </div>
          <div className="center"><a href="#order" className="btn">অর্ডার করতে চাই</a></div>
        </div>
      </section>

      {/* COMPARE */}
      <section>
        <div className="wrap narrow">
          <span className="eyebrow">হিসাব করে দেখুন</span>
          <h2>পার্লার নাকি <span>নিজের ম্যাসাজ গান?</span></h2>
          <div className="compare">
            <div className="cmp bad">
              <h3><Building2 size={22} /> ম্যাসাজ পার্লার</h3>
              <ul>{["প্রতিবার ৳৮০০–১৫০০ খরচ","যাওয়া-আসায় সময় নষ্ট","শুধু নিজের জন্য"].map(t=><li key={t}><X size={18} />{t}</li>)}</ul>
              <div className="big">৳১০,০০০+/বছর</div>
            </div>
            <div className="cmp good">
              <h3><Icon name="Zap" size={22} /> LM-280 ম্যাসাজ গান</h3>
              <ul>{["একবারই খরচ","যখন খুশি, বাসায় বসে","পুরো পরিবার ব্যবহার করবে"].map(t=><li key={t}><Check size={18} />{t}</li>)}</ul>
              <div className="big">৳{bn(PRICE.now)} একবার</div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS + STEPS */}
      <section className="features">
        <div className="wrap two">
          <div>
            <h3 className="sub-h"><ClipboardList size={22} /> পণ্যের বিবরণ</h3>
            <table><tbody>{SPECS.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}</tbody></table>
          </div>
          <div>
            <h3 className="sub-h"><MousePointerClick size={22} /> ব্যবহার করা খুব সহজ</h3>
            <div className="steps">
              {STEPS.map((s, i) => <div className="step" key={s}><b>{bn(i + 1)}</b><div>{s}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section>
        <div className="wrap narrow">
          <div className="offer">
            <h2><Timer size={30} className="inline-ic" /> অফার শেষ হতে বাকি</h2>
            <p>অফার শেষ হলে দাম আবার ৳{bn(PRICE.old)} হয়ে যাবে</p>
            <Countdown />
            <div className="stock"><p><TriangleAlert size={16} /> এই ব্যাচের স্টক প্রায় শেষ</p><div className="bar"><i /></div></div>
            <a href="#order" className="btn pulse">অফার মূল্যে অর্ডার করুন</a>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap narrow guar">
          <div><i><Banknote size={26} /></i>ক্যাশ অন ডেলিভারি</div>
          <div><i><SearchCheck size={26} /></i>চেক করে টাকা দিন</div>
          <div><i><ShieldCheck size={26} /></i>৬ মাস ওয়ারেন্টি</div>
          <div><i><PhoneCall size={26} /></i>কল করে সাপোর্ট</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="features">
        <div className="wrap narrow">
          <span className="eyebrow">FAQ</span>
          <h2>সাধারণ <span>প্রশ্ন</span></h2>
          {FAQS.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="order-sec">
        <div className="wrap narrow">
          <div className="order"><OrderForm /></div>
        </div>
      </section>

      <footer>
        <b>{SHOP.name}</b><br />
        যেকোনো প্রয়োজনে কল করুন: <b>{SHOP.phone}</b>
        <nav><a href="#">রিটার্ন পলিসি</a><a href="#">প্রাইভেসি পলিসি</a><a href="#">যোগাযোগ</a></nav>
        © 2026 {SHOP.name}
      </footer>

      <div className="sticky">
        <a href={`https://wa.me/${SHOP.whatsapp}`} className="btn wa" aria-label="WhatsApp"><WhatsAppIcon /></a>
        <a href="#order" className="btn"><ShoppingCart size={20} /> অর্ডার করুন — ৳{bn(PRICE.now)}</a>
      </div>
    </>
  );
}
