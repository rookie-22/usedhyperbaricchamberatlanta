import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormspree } from "@formspree/react";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  FileText,
  ShieldCheck,
  Stethoscope,
  Activity,
  ArrowRight,
  Dumbbell,
  Trophy,
  Plane,
  Brain,
  Flame,
  Moon,
  Heart,
  Linkedin,
  ShieldCheck as VerifiedIcon
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

import heroChamberImg from "@assets/IMG_3856_1777423282008.jpeg";
import chamberTopImg from "@assets/IMG_3855_1777423282008.jpeg";
import chamberTopAltImg from "@assets/IMG_3854_1777423282008.jpeg";
import operatingUnitImg from "@assets/IMG_3851_1777423282008.jpeg";
import operatingUnitTopImg from "@assets/IMG_3852_1777423282008.jpeg";
import operatingUnitSideImg from "@assets/IMG_3853_1777423282008.jpeg";
import insideChairImg from "@assets/IMG_3857_1777423282008.jpeg";
import insideBedImg from "@assets/Inside-Review-of-OXYREVO-Forward90-Portable-Sitting-Hyperbaric_1777423282008.jpg";
import insideDetailsImg from "@assets/Inside-of-Sitting-Hyperbaric-Chamber_1777423282008.jpg";
import featuresInfographicImg from "@assets/Oxy_1777423282008.jpg";
import proVersionImg from "@assets/FORWARD90Pro_a39ce742-7520-4e56-8fa9-22016ae0b0b8_1777423282008.png";
import chamberStudioImg from "@assets/OxyRevo-Portable-Sitting-Hyperbaric-Chamber-Forward90-02_1777423282008.jpg";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [formspreeState, submitToFormspree] = useFormspree("mvzdebgl");

  useEffect(() => {
    if (formspreeState.succeeded) {
      toast.success("Inquiry sent successfully. We will get back to you soon.");
      form.reset();
    }
  }, [formspreeState.succeeded, form]);

  useEffect(() => {
    if (formspreeState.errors) {
      toast.error("There was an error sending your inquiry. Please try again.");
    }
  }, [formspreeState.errors]);

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    await submitToFormspree(values);
  }

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2.5" aria-label="Used Hyperbaric Chamber Atlanta — home" data-testid="link-logo">
            <Activity className="h-6 w-6 text-primary shrink-0" />
            <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight text-secondary leading-none">
              Used Hyperbaric Chamber<span className="font-sans font-medium text-primary ml-1.5">Atlanta</span>
            </span>
          </a>
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 shadow-sm"
          >
            Inquire About Purchase
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary border-primary/20 bg-primary/10 w-fit">
                Save $7,400 • Like New • Local Pickup in Buckhead, Atlanta
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-secondary">
                Used Hyperbaric Chamber for Sale in Atlanta, GA
              </h1>
              <p className="text-base text-secondary/80 font-medium max-w-[640px]">
                OXYREVO Forward90 Pro · 1.4–1.5 ATA · Local Pickup in Buckhead — serving the entire Atlanta metro area.
              </p>
              <p className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">
                Private sale by the original owner. A premium OXYREVO Forward90 Pro hyperbaric chamber, used personally for only 40 sessions, now offered at nearly half the retail price — the rare like-new used hyperbaric chamber for sale near you in Atlanta.
              </p>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="text-4xl md:text-5xl font-serif font-bold text-primary" data-testid="text-hero-price">$9,999</span>
                <span className="text-lg text-muted-foreground line-through">$17,400</span>
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 border border-primary/20">Save 43%</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 -mt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/5 text-secondary text-xs font-semibold px-2.5 py-1 border border-secondary/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  Take it home today
                </span>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 py-2 shadow-md"
                  data-testid="link-hero-cta"
                >
                  Inquire About This Chamber
                </a>
                <a
                  href="#specs"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-secondary/20 text-secondary hover:bg-secondary/5 h-12 px-7 py-2"
                  data-testid="link-hero-specs"
                >
                  See Full Specs
                </a>
              </div>
              
              <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 text-sm">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-medium uppercase tracking-wider text-xs mb-1">Item</span>
                    <span className="font-semibold text-secondary">OXYREVO Forward90</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-medium uppercase tracking-wider text-xs mb-1">Condition</span>
                    <span className="font-semibold text-secondary">Like New (40 sessions)</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-medium uppercase tracking-wider text-xs mb-1">Location</span>
                    <span className="font-semibold text-secondary">Buckhead, Atlanta, GA</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border bg-slate-100 group"
            >
              <img
                src={heroChamberImg}
                alt="Used hyperbaric chamber Atlanta — OXYREVO Forward90 Pro for sale in Buckhead, Atlanta GA. Like-new sage green portable sitting hyperbaric oxygen chamber (1.4–1.5 ATA), 40 personal-use sessions, photographed in the original owner's Buckhead home — actual unit available for local pickup in the Atlanta metro area."
                title="Used Hyperbaric Chamber Atlanta — OXYREVO Forward90 Pro (Buckhead, Atlanta GA)"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
                width="800"
                height="600"
                data-testid="img-hero-chamber"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-secondary shadow-md border border-white">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Actual Unit • Atlanta, GA
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-secondary/85 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-white text-xs leading-relaxed">
                OXYREVO Forward90 Pro hyperbaric chamber for sale in Atlanta, GA — photographed in the seller's Buckhead home.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* From the Owner */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                A Note From the Owner
              </div>
              <div className="text-5xl font-serif text-primary leading-none mb-4 select-none" aria-hidden="true">&ldquo;</div>
              <p className="text-xl md:text-2xl font-serif text-secondary leading-relaxed mb-6">
                Finally finished my recovery cycle and I'm parting with my hyperbaric chamber. It's been a true game-changer for my recovery — I'm grateful every day I invested in it.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                I bought this OXYREVO Forward90 Pro brand new in November 2025 to support my own healing journey. It delivered exactly what I hoped for — faster recovery, better sleep, and a noticeable lift in how I felt every day.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Now that I'm back to where I want to be, it's time to pass it on to someone who can get the same benefit. The unit has been kept in pristine condition in a climate-controlled space and is ready to plug in and use from day one.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
                  ST
                </div>
                <div>
                  <p className="font-semibold text-secondary">The Original Owner</p>
                  <p className="text-sm text-muted-foreground">Private seller • Buckhead, Atlanta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">A Rare Opportunity — Premium Wellness for Less</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground">A like-new, professional-grade OXYREVO Forward90 Pro at almost half the retail price — ideal for <strong className="text-secondary font-semibold">home use</strong> or as a turnkey addition to a <strong className="text-secondary font-semibold">wellness clinic, recovery studio, chiropractic practice, med-spa, or performance gym</strong>. Ready to start delivering results — and revenue — on day one.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Your Price", value: "$9,999", desc: "Retail $17,400 — you save over $7,400.", icon: FileText },
              { title: "Condition", value: "Like New", desc: "Only 40 personal-use sessions since November 2025.", icon: CheckCircle2 },
              { title: "Warranty", value: "3 Years", desc: "Full remainder of residential warranty included.", icon: ShieldCheck },
              { title: "Availability", value: "Today", desc: "Take it home today and start using it tonight.", icon: ArrowRight }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="mx-auto w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">{item.title}</h3>
                <p className="text-2xl font-serif font-bold text-secondary mb-2">{item.value}</p>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Engineered for Comfort, Built to Last</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground">A spacious, portable soft chamber that lets you sit or recline comfortably with its adjustable folding chair — designed with eco-friendly materials, premium components, and quiet operation for an exceptional in-home experience.</p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-14 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm"
          >
            <img
              src={featuresInfographicImg}
              alt="Used hyperbaric chamber Atlanta features diagram — OXYREVO Forward90 Pro sitting hyperbaric chamber engineered features: heat-welded construction (no toxic glues), dual pressure display, unique curved zipper design, adjustable pressure 1.2–1.5 ATA, durable laser printing, and extra quiet pressure relief valves. Local pickup Buckhead, Atlanta GA."
              title="OXYREVO Forward90 Pro Hyperbaric Chamber Features — Used in Atlanta"
              className="w-full h-auto"
              loading="lazy"
              data-testid="img-features-infographic"
            />
          </motion.figure>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Unique Curved Zipper Design", desc: "Smooth, secure entry with a thoughtfully engineered shape." },
              { title: "Heat Welded Seams", desc: "No toxic glues or sewing — built with safe, eco-friendly materials." },
              { title: "Durable Laser Printing", desc: "No glued paper labels — clean, lasting graphics inside and out." },
              { title: "Adjustable Pressure 1.2–1.5 ATA", desc: "You set the pressure with a simple, precise control knob." },
              { title: "Extra Quiet Operation", desc: "Whisper-quiet pressure relief valves keep sessions ≤ 50 dB." },
              { title: "Dual Pressure Display", desc: "Real-time in/out pressure data — always know exactly where you are." },
              { title: "Spacious for One Adult + Child", desc: "Sit, recline, or share a session — plenty of room to relax." },
              { title: "Premium Comfort Inside", desc: "Memory foam mattress, internal frame, and 4 large viewing windows." },
              { title: "Custom Valves & Dual YKK Zippers", desc: "Professional-grade hardware for safe, reliable sessions." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section id="specs" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Full Technical Specifications</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground">Professional-grade equipment with the Pro Version all-in-one operating unit — everything you need for safe, effective sessions in one beautifully integrated system.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="bg-secondary px-6 py-5 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold text-white">The Chamber</h3>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden border-b border-slate-200">
                <img
                  src={chamberStudioImg}
                  alt="Used hyperbaric chamber Atlanta — OXYREVO Forward90 Pro portable sitting hyperbaric chamber, sage green soft-shell design with 4 large viewing windows, 1.4 ATA working pressure, 90″ × 47″ × 47″ for 1 adult plus child. For sale in Buckhead, Atlanta GA."
                  title="OXYREVO Forward90 Pro Hyperbaric Chamber — Used, Atlanta GA"
                  className="w-full h-full object-contain p-6"
                  loading="lazy"
                  data-testid="img-chamber-studio"
                />
              </div>
              <div className="p-6 md:p-8">
                <dl className="space-y-4">
                  {[
                    { label: "Working Pressure", value: "1.4 ATA / 1.5 ATA" },
                    { label: "Weight", value: "15 kg / 30 lbs" },
                    { label: "Dimensions", value: "90\" L × 47\" W × 47\" H (7.5 × 3.9 × 3.9 ft)" },
                    { label: "Windows", value: "4 large multi-layered windows" },
                    { label: "Sound Level", value: "≤ 50 dB (whisper quiet)" },
                    { label: "Folding Chair", value: "Adjustable, sit or recline" },
                    { label: "Capacity", value: "1 adult + 1 child" },
                    { label: "Cover Color", value: "Green" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline border-b border-slate-100 pb-3 last:border-0">
                      <dt className="font-semibold text-secondary sm:w-2/5 mb-1 sm:mb-0">{spec.label}</dt>
                      <dd className="text-slate-600 sm:w-3/5">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.15 }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="bg-primary px-6 py-5 flex items-center gap-3">
                <Stethoscope className="w-6 h-6 text-white" />
                <h3 className="text-xl font-serif font-bold text-white">Pro Version All-in-One Unit</h3>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden border-b border-slate-200">
                <img
                  src={operatingUnitImg}
                  alt="Used hyperbaric chamber Atlanta — OXYREVO Forward90 Pro Version all-in-one operating unit. Includes 10L oxygen concentrator (90–97% purity), oil-free air compressor, dual cooling machines, anion generator and air filtration. Actual photo of the operating unit included with this used hyperbaric chamber for sale in Buckhead, Atlanta GA."
                  title="OXYREVO Pro Version Operating Unit — Used Hyperbaric Chamber Atlanta"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid="img-operating-unit"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-slate-700 mb-5 leading-relaxed">
                  One integrated machine combines: oil-free <strong>air compressor</strong>, <strong>10L oxygen concentrator</strong> (90–97% purity), <strong>2 cooling machines</strong>, <strong>anion generator</strong>, timing alarm, oxygen meter, water container, and air filters.
                </p>
                <dl className="space-y-4">
                  {[
                    { label: "Oxygen Output", value: "10L / minute, 90–97% purity" },
                    { label: "Operation", value: "One-press activation, integrated control" },
                    { label: "Dimensions", value: "27.56\" L × 13.78\" W × 29.53\" H" },
                    { label: "Weight", value: "176.37 lbs" },
                    { label: "System", value: "Enhanced dehumidifying + continuous cooling" },
                    { label: "Air Quality", value: "Nano Water Ion Tech — 99% virus sterilization" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline border-b border-slate-100 pb-3 last:border-0">
                      <dt className="font-semibold text-secondary sm:w-2/5 mb-1 sm:mb-0">{spec.label}</dt>
                      <dd className="text-slate-600 sm:w-3/5">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Everything You Need — Included</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground">A complete, ready-to-use system. Plug it in, sit down, and start your session.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={operatingUnitTopImg}
                  alt="Used hyperbaric chamber Atlanta — OXYREVO Forward90 Pro Version operating unit top control panel showing one-press On/Off, O2, Air Purifier/Anion, Dehumidify, Refrigerate and Timer controls with oxygen flow meter and water humidifier. Actual unit, Buckhead Atlanta GA."
                  title="OXYREVO Forward90 Pro Operating Unit Controls — Used in Atlanta"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid="img-operating-unit-top"
                />
              </div>
              <div className="p-6 md:p-8">
              <h3 className="text-xl font-serif font-bold text-secondary mb-5">Operating Unit</h3>
              <ul className="space-y-3">
                {[
                  "Oil-free air compressor",
                  "10L oxygen concentrator",
                  "Cooling machines (×2)",
                  "Anion air purifier",
                  "Air sterilizer",
                  "Air filter system",
                  "Humidity water container",
                  "All-in-One Pro Version integrated machine",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.15 }}
              className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={insideChairImg}
                  alt="Used hyperbaric chamber Atlanta interior — inside the OXYREVO Forward90 Pro showing the adjustable sage-green folding chair (sit or recline), memory foam mattress, multi-layered viewing window and pressure relief valve. Actual photo of the included accessories with this used hyperbaric chamber for sale in Buckhead, Atlanta GA."
                  title="Inside the OXYREVO Forward90 — Used Hyperbaric Chamber Atlanta"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid="img-inside-chair"
                />
              </div>
              <div className="p-6 md:p-8">
              <h3 className="text-xl font-serif font-bold text-secondary mb-5">Accessories & Extras</h3>
              <ul className="space-y-3">
                {[
                  "Oxygen mask",
                  "Spare activated carbon cotton filters",
                  "Spare fuses",
                  "Air & oxygen tubes",
                  "Power cable",
                  "Adjustable folding chair",
                  "Memory foam mattress",
                  "Original documentation & user manuals",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-2 shadow-md"
              data-testid="link-included-cta"
            >
              Inquire About Purchase
            </a>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Photo Gallery</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">See the Actual Unit — Up Close</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground leading-relaxed">
              Real photos of this OXYREVO Forward90 Pro hyperbaric chamber, taken in the seller's Buckhead, Atlanta home. What you see is exactly what you'll pick up.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <motion.figure
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group aspect-[4/3]"
            >
              <img
                src={insideBedImg}
                alt="Used hyperbaric chamber Atlanta interior — inside view of the OXYREVO Forward90 Pro showing the sage green mattress with pillows, four large viewing windows, ceiling LED reading light, pressure gauges, oxygen mask hookup and pressure-relief valves. Spacious one-adult-plus-child capacity. For sale in Buckhead, Atlanta GA."
                title="OXYREVO Forward90 Interior — Used Hyperbaric Chamber Atlanta GA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                data-testid="img-gallery-inside-bed"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 to-transparent p-5 text-white">
                <span className="inline-flex items-center rounded-full bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider mb-2">Interior</span>
                <p className="text-sm font-semibold">Spacious sage interior — windows, gauges & ceiling LED</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group aspect-square"
            >
              <img
                src={operatingUnitSideImg}
                alt="Used hyperbaric chamber Atlanta — OXYREVO Forward90 Pro Version all-in-one operating unit shown beside the sage green Forward90 chamber. Actual unit photo from the original owner's Buckhead, Atlanta GA home, included with this private-sale used hyperbaric chamber for local pickup."
                title="OXYREVO Pro Version Unit + Forward90 Chamber — Used in Atlanta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                data-testid="img-gallery-operating-side"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 to-transparent p-4 text-white">
                <span className="inline-flex items-center rounded-full bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider mb-1.5">Actual Unit</span>
                <p className="text-xs font-semibold">Pro Version unit + chamber</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group aspect-square"
            >
              <img
                src={chamberTopImg}
                alt="Used hyperbaric chamber Atlanta — top-down view of the OXYREVO Forward90 Pro showing the unique curved YKK zipper opening, top viewing window and warning labels in pristine like-new condition. Actual unit for sale in Buckhead, Atlanta GA."
                title="OXYREVO Forward90 Curved Zipper — Used Hyperbaric Chamber Atlanta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                data-testid="img-gallery-chamber-top"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 to-transparent p-4 text-white">
                <span className="inline-flex items-center rounded-full bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider mb-1.5">Actual Unit</span>
                <p className="text-xs font-semibold">Top view & curved zipper</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group aspect-square"
            >
              <img
                src={chamberTopAltImg}
                alt="Used hyperbaric chamber Atlanta — OXYREVO Forward90 Pro shown fully zipped closed in like-new exterior condition (only 40 personal-use sessions). Actual unit photo from the seller's Buckhead, Atlanta GA home, available for local pickup."
                title="OXYREVO Forward90 Like-New Exterior — Used Hyperbaric Chamber Atlanta GA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                data-testid="img-gallery-chamber-zipped"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 to-transparent p-4 text-white">
                <span className="inline-flex items-center rounded-full bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider mb-1.5">Actual Unit</span>
                <p className="text-xs font-semibold">Like-new exterior condition</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group aspect-square"
            >
              <img
                src={insideDetailsImg}
                alt="Used hyperbaric chamber Atlanta — close-up interior details of the OXYREVO Forward90 Pro: dual pressure gauge, oxygen-feed and pressure-relief valves, multi-layered viewing window and overhead curved LED light. Inside the actual unit for sale in Buckhead, Atlanta GA."
                title="OXYREVO Forward90 Interior Details — Used Hyperbaric Chamber Atlanta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                data-testid="img-gallery-inside-details"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 to-transparent p-4 text-white">
                <span className="inline-flex items-center rounded-full bg-secondary/80 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider mb-1.5">Interior Details</span>
                <p className="text-xs font-semibold">Gauges, valves & lighting</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group aspect-square p-6 flex items-center justify-center"
            >
              <img
                src={proVersionImg}
                alt="Used hyperbaric chamber Atlanta — OXYREVO Forward90 Pro Version complete system: sage green sitting hyperbaric chamber paired with the all-in-one operating unit (10L oxygen concentrator, oil-free compressor, cooling and anion generator). The full Pro Version package included with this used Forward90 for sale in Buckhead, Atlanta GA."
                title="OXYREVO Forward90 Pro Version Complete System — Used in Atlanta"
                className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                data-testid="img-gallery-pro-version"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center rounded-full bg-secondary/90 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">Pro Version</span>
              </div>
            </motion.figure>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mt-10"
          >
            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              In-person viewings available by appointment in Buckhead, Atlanta. Inquire below to schedule a time to see the chamber yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Owners Love the Forward90</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-white/70">Used by performance athletes for faster recovery and by active lifestyles for everyday wellness — daily sessions in your own home, no clinic appointments, no per-session fees.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Performance Athletes",
                desc: "A go-to recovery tool for runners, CrossFit, lifters, cyclists, and triathletes — reduce DOMS, accelerate muscle repair, and stack hard training days.",
                icon: Dumbbell,
                tag: "Performance"
              },
              {
                title: "Game-Day & Pre-Event Prep",
                desc: "Oxygenate before a race, match, or meet. Pro and Olympic athletes use HBOT to sharpen focus and prime endurance ahead of competition.",
                icon: Trophy,
                tag: "Performance"
              },
              {
                title: "Active Lifestyle & Biohacking",
                desc: "Weekend warriors, golfers, skiers, and longevity-focused biohackers use daily sessions to feel sharper, sleep better, and stay ahead of aging.",
                icon: Heart,
                tag: "Lifestyle"
              },
              {
                title: "Faster Injury & Surgery Recovery",
                desc: "Accelerate healing from workouts, surgery, sprains, or soft-tissue injuries — speed up recovery on your own schedule.",
                icon: Activity,
                tag: "Recovery"
              },
              {
                title: "Travel & Jet Lag Reset",
                desc: "Bounce back from long flights, time-zone changes, and travel fatigue with a session in your own home before or after the trip.",
                icon: Plane,
                tag: "Lifestyle"
              },
              {
                title: "Sharper Mind & Focus",
                desc: "Support neurological wellness, mental clarity, and cognitive performance — popular with executives, founders, and creatives.",
                icon: Brain,
                tag: "Lifestyle"
              },
              {
                title: "Less Inflammation",
                desc: "Help reduce systemic inflammation that holds you back from training, working, and living at full capacity.",
                icon: Flame,
                tag: "Recovery"
              },
              {
                title: "Stronger Immunity & Cellular Oxygenation",
                desc: "Flood your tissues with pure oxygen for cellular-level support — and help your body stay resilient year-round.",
                icon: ShieldCheck,
                tag: "Wellness"
              },
              {
                title: "Better Sleep & Energy",
                desc: "Memory-foam interior plus restorative sessions help you wind down at night and wake up with more energy.",
                icon: Moon,
                tag: "Lifestyle"
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm hover:bg-white/15 transition-colors"
                data-testid={`card-benefit-${i}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/90 bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5">
                    {benefit.tag}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-center text-xs text-white/50 max-w-3xl mx-auto mt-10 leading-relaxed"
          >
            Wellness benefits described reflect common reasons private owners purchase mild hyperbaric oxygen chambers. Not a medical claim — consult your physician before starting any new wellness protocol.
          </motion.p>
        </div>
      </section>

      {/* Logistics & Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Pickup in Buckhead — Used Hyperbaric Chamber Near Me in Atlanta Metro</h2>
              <div className="space-y-6 mb-6 text-lg text-slate-700">
                <p className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                  <span><strong>Ready for immediate pickup</strong> in Buckhead, Atlanta, GA.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                  <span>Available for immediate pickup in the Buckhead/Atlanta Metro area. Buyers traveling from within a <strong>4-hour radius of Atlanta</strong> are welcome.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                  <span>See it, test it, and load it up — no shipping risk or delays.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                  <span>Private viewings available by appointment.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                  <span>Serious inquiries get priority — first qualified buyer takes it.</span>
                </p>
              </div>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 py-2 shadow-sm"
                data-testid="link-location-cta"
              >
                Inquire About Purchase
              </a>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="h-[400px] bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center shadow-inner">
              <MapPin className="w-12 h-12 text-slate-300 mb-4" />
              <h3 className="text-xl font-serif font-bold text-secondary mb-2">Google Maps — Buckhead, Atlanta, GA</h3>
              <p className="text-muted-foreground text-sm max-w-xs">Exact address provided upon confirmed appointment for privacy.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serving the Atlanta Metro Area */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Serving the Greater Atlanta Metro Area</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground leading-relaxed">
              If you've been searching for a <strong>used hyperbaric chamber near me</strong> in Atlanta, this is the listing you've been looking for. Local pickup is offered from <strong>Buckhead</strong>, conveniently located for buyers across the entire Atlanta metro area — including in-town neighborhoods, OTP suburbs, and the Northern Arc.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 text-center">Convenient Pickup From</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-center">
              {[
                "Buckhead",
                "Sandy Springs",
                "Brookhaven",
                "Dunwoody",
                "Marietta",
                "Smyrna",
                "Vinings",
                "Roswell",
                "Alpharetta",
                "Johns Creek",
                "Decatur",
                "Druid Hills",
                "Virginia-Highland",
                "Midtown Atlanta",
                "Inman Park",
                "Chamblee",
                "East Cobb",
                "Tucker",
                "Norcross",
                "North Atlanta",
              ].map((city) => (
                <span
                  key={city}
                  className="px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm text-secondary font-medium"
                  data-testid={`text-area-${city.toLowerCase().replace(/[^a-z]/g, "-")}`}
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 leading-relaxed">
              Easily accessible from <strong>I-285, GA-400, I-75, and I-85</strong> — most Atlanta metro buyers are within a 30-minute drive. This is the only privately listed, like-new <strong>used OXYREVO Forward90 Pro hyperbaric chamber for sale in Atlanta</strong> at this price point.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Used Hyperbaric Chamber Atlanta — FAQ</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground">Answers to the most common questions buyers ask about this used OXYREVO Forward90 Pro for sale in Atlanta.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Accordion type="single" collapsible className="w-full bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              {[
                { q: "Where can I buy a used hyperbaric chamber in Atlanta?", a: "This OXYREVO Forward90 Pro is available for local pickup in Buckhead, Atlanta, GA. It is one of the very few like-new used hyperbaric chambers for sale in the Atlanta metro area, with private viewings by appointment." },
                { q: "How much does a used hyperbaric chamber cost in Atlanta?", a: "This used OXYREVO Forward90 Pro hyperbaric chamber is offered at $9,999 in Atlanta — a savings of over $7,400 from the $17,400 retail price. New comparable units typically range from $15,000 to $20,000 or more." },
                { q: "Can I see the hyperbaric chamber in Atlanta before I buy it?", a: "Yes. Private viewings are available by appointment at the seller's location in Buckhead, Atlanta, GA. Use the inquiry form below to request a time." },
                { q: "Is the warranty transferable to me as the new owner?", a: "The unit was purchased new in November 2025 and includes the remainder of a 3-year residential warranty. Warranty transfer details available upon inquiry." },
                { q: "What ATA does the OXYREVO Forward90 operate at?", a: "The OXYREVO Forward90 operates at 1.4 ATA standard and can reach 1.5 ATA — within the safe, effective pressure range for home and wellness use." },
                { q: "Does the price include the Pro Version compressor and accessories?", a: "Yes. The sale includes the Pro Version all-in-one operating unit (10L oxygen concentrator, oil-free compressor, cooling, anion generator) and all original accessories." },
                { q: "Why is the owner selling this hyperbaric chamber?", a: "The original owner finished their personal recovery cycle and is parting with the chamber. It has been meticulously maintained and used personally for only 40 total sessions — like-new condition and ready for immediate use." },
                { q: "Does the seller ship the hyperbaric chamber, or is it pickup only?", a: "Local pickup only in the Buckhead, Atlanta area, serving the greater Atlanta metro (Sandy Springs, Brookhaven, Dunwoody, Marietta, Decatur, Roswell, Alpharetta and surrounding cities). This ensures you can inspect it in person." },
                { q: "Is this a business or a private sale?", a: "This is a private sale by the original owner — not a business or dealer. You're buying directly from the person who purchased and used the unit personally." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="px-6 border-b last:border-0 border-slate-100">
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary py-4">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-secondary mb-3">Inquire About This Chamber</h2>
                <p className="text-muted-foreground">Send a quick message to schedule a private viewing in Buckhead or ask any questions. This is a private sale by the original owner — first serious inquiry has priority.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="I'm interested in the OXYREVO Forward90..." 
                            className="min-h-[120px] bg-white resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-semibold text-base py-6"
                    disabled={form.formState.isSubmitting}
                    data-testid="button-submit-inquiry"
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </Form>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  <VerifiedIcon className="w-3.5 h-3.5" />
                  <span>Verified Seller — Alternate Contact</span>
                </div>
                <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
                  Prefer to see who you're dealing with first? Connect with me on LinkedIn for a verified profile and an alternate way to reach me — in addition to email above.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/stevenstucker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-secondary text-white hover:bg-secondary/90 text-sm font-medium shadow-sm transition-colors"
                    data-testid="link-linkedin-contact"
                    aria-label="Connect with Steven Stucker on LinkedIn (opens in new tab)"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect with Steven on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif font-bold text-xl tracking-tight block mb-2">OXYREVO<span className="font-sans font-normal text-sm ml-2 text-white/60">Atlanta</span></span>
            <p className="text-white/60 text-sm">usedhyperbaricchamberatlanta.com</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-sm text-white/60 space-y-1 text-center md:text-right">
            <p>Buckhead, Atlanta, GA</p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="hover:text-white transition-colors"
              data-testid="link-footer-inquire"
            >
              Inquire About Purchase
            </a>
            <p className="pt-2 font-medium text-white/80">Local pickup only. Private sale.</p>
            <p className="pt-4 text-xs opacity-50">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}