import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="kicker">German Shepherd Nutrition</div>
            <h1>Feed smarter for a stronger, happier GSD</h1>
            <p>
              Practical, vet-aligned guidance tailored to German Shepherds: portion sizes by weight and age, macronutrient targets, ingredient checklists, and curated food picks.
            </p>
            <div className="cta-row">
              <a className="button" href="#guide">View feeding guide</a>
              <a className="button secondary" href="#picks">See top food picks</a>
            </div>
            <div className="badges">
              <span className="badge">AAFCO-compliant picks</span>
              <span className="badge">Large-breed formulas</span>
              <span className="badge">Digestive care friendly</span>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=960&auto=format&fit=crop"
              alt="German Shepherd resting after a healthy meal"
              width={960}
              height={720}
              style={{ width: '100%', height: 'auto', borderRadius: 12 }}
              priority
            />
          </div>
        </div>
      </section>

      <div className="hr" />

      <section id="guide" className="section">
        <div className="container">
          <h2>Feeding guide by life stage</h2>
          <p className="small">Use this as a starting point. Adjust based on body condition, activity, and your vet's advice.</p>
          <div className="grid cols-3" style={{ marginTop: 12 }}>
            <div className="card">
              <h3>Puppy (2?12 months)</h3>
              <ul>
                <li>Protein: 26?30%</li>
                <li>Fat: 12?16%</li>
                <li>Calcium: 1.2?1.5% (controlled)</li>
                <li>Feed 3 meals/day</li>
              </ul>
              <p className="small">Choose large-breed puppy formulas to manage growth rate.</p>
            </div>
            <div className="card">
              <h3>Adult (1?7 years)</h3>
              <ul>
                <li>Protein: 22?28%</li>
                <li>Fat: 10?15%</li>
                <li>Glucosamine + chondroitin preferred</li>
                <li>Feed 2 meals/day</li>
              </ul>
              <p className="small">Maintain lean physique to protect hips and elbows.</p>
            </div>
            <div className="card">
              <h3>Senior (7+ years)</h3>
              <ul>
                <li>Protein: 24?28% (high-quality)</li>
                <li>Fat: 8?12%</li>
                <li>Added EPA/DHA for joints</li>
                <li>Feed 2 smaller meals/day</li>
              </ul>
              <p className="small">Consider digestive support and lower calorie density.</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Daily portion estimator</h3>
            <p className="small">Approximate dry food amounts for a healthy body condition.</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Weight</th>
                  <th>Low activity</th>
                  <th>Moderate</th>
                  <th>High</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>25 kg (55 lb)</td>
                  <td>~ 2.3 cups</td>
                  <td>~ 2.8 cups</td>
                  <td>~ 3.3 cups</td>
                </tr>
                <tr>
                  <td>35 kg (77 lb)</td>
                  <td>~ 3.0 cups</td>
                  <td>~ 3.6 cups</td>
                  <td>~ 4.3 cups</td>
                </tr>
                <tr>
                  <td>45 kg (99 lb)</td>
                  <td>~ 3.6 cups</td>
                  <td>~ 4.4 cups</td>
                  <td>~ 5.2 cups</td>
                </tr>
              </tbody>
            </table>
            <p className="note" style={{ marginTop: 12 }}>
              Always transition foods over 7?10 days. Ensure constant access to fresh water.
            </p>
          </div>
        </div>
      </section>

      <section id="picks" className="section">
        <div className="container">
          <h2>Top food picks for German Shepherds</h2>
          <div className="grid cols-3" style={{ marginTop: 12 }}>
            <div className="card">
              <h3>Large-Breed Puppy Formula</h3>
              <p className="small">Controlled calcium, DHA for brain, balanced energy for steady growth.</p>
              <ul>
                <li>AAFCO large-breed puppy</li>
                <li>Calcium ? 1.5%</li>
                <li>Phosphorus ~1.0%</li>
              </ul>
            </div>
            <div className="card">
              <h3>Active Adult Formula</h3>
              <p className="small">Higher protein with joint support for working or sporty GSDs.</p>
              <ul>
                <li>Protein ? 26%</li>
                <li>Glucosamine + chondroitin</li>
                <li>Omega-3s from fish oil</li>
              </ul>
            </div>
            <div className="card">
              <h3>Sensitive Stomach & Skin</h3>
              <p className="small">Single-protein, gentle fibers, and skin-supportive omegas.</p>
              <ul>
                <li>Prebiotic fiber</li>
                <li>Limited ingredients</li>
                <li>Vitamin E + omegas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <h2>FAQ</h2>
          <div className="grid cols-2" style={{ marginTop: 12 }}>
            <div className="card">
              <h3>How often should I feed my GSD?</h3>
              <p>Adults typically do best on two meals per day to support digestion and energy. Puppies need three meals until ~6 months.</p>
            </div>
            <div className="card">
              <h3>Are grain-free diets necessary?</h3>
              <p>Not usually. Many German Shepherds do well on diets with wholesome grains like oats or rice. Choose proven formulas and monitor tolerance.</p>
            </div>
            <div className="card">
              <h3>How do I prevent bloat (GDV)?</h3>
              <p>Use measured meals, avoid vigorous activity 1 hour before/after meals, consider slow-feeders, and discuss risk-reduction with your vet.</p>
            </div>
            <div className="card">
              <h3>What treats are appropriate?</h3>
              <p>Lean, single-ingredient treats or training bites. Keep treats under 10% of daily calories.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
