const highlights = [
    {
        title: "Made at home",
        text: "Every treat is prepared in small batches with fresh ingredients.",
    },
    {
        title: "Made for sharing",
        text: "Our platters are sized for family dinners, parties and celebrations.",
    },
    {
        title: "Made to order",
        text: "Tell us about your event and we will prepare everything on time.",
    },
];

function AboutSection() {
    return (
        <section className="about-section" id="about">
            <p className="eyebrow">ABOUT US</p>

            <h2>Homemade flavors, shared around the table.</h2>

            <p className="about-text">
                Table Treats started with a simple idea: the best moments happen when
                people gather around good food. We prepare savory and sweet treats that
                feel homemade, because they are.
            </p>

            <div className="about-highlights">
                {highlights.map((highlight) => (
                    <article className="about-card" key={highlight.title}>
                        <h3>{highlight.title}</h3>
                        <p>{highlight.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default AboutSection;