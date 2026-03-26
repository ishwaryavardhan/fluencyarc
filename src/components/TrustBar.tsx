import React from "react";

const TrustBar = () => {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-bold text-text-secondary/60 uppercase tracking-widest mb-10">
                    Trusted by the world&apos;s best teams
                </p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
                    {["Google", "Microsoft", "Stripe", "Airbnb", "HubSpot", "Slack", "Amazon", "Salesforce"].map((logo) => (
                        <div key={logo} className="font-heading font-black text-2xl text-slate-400 select-none">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
