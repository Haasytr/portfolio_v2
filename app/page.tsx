const capabilities = [
  {
    number: "01",
    title: "Product interfaces",
    text: "Responsive, accessible experiences with clear interaction design and thoughtful visual systems.",
    tools: "React · Next.js · TypeScript",
  },
  {
    number: "02",
    title: "Full-stack systems",
    text: "From polished interfaces to data models, authentication, integrations, and production workflows.",
    tools: "Node.js · Prisma · Convex",
  },
  {
    number: "03",
    title: "Financial integrations",
    text: "Unified APIs across accounting, banking, payments, and commerce, built for accuracy, reliability, and change.",
    tools: "Accounting · Banking · Payments",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vinicius Santos, home">
          <span>VS</span>
          <span className="brand-meta">FULL-STACK<br />ENGINEER</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>Portfolio / 2026</span>
          <span>São Paulo, Brazil</span>
        </div>
        <h1>
          I build digital products
          <span>that feel unmistakably right.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Full-stack engineer focused on turning ambitious ideas into fast,
            clear, and intentional products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/Haasytr"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-orbit" aria-label="Core skills solar system">
          <div className="orbit-line orbit-one" />
          <div className="orbit-line orbit-two" />
          <div className="orbit-line orbit-three" />
          <div className="orbit-line orbit-four" />
          <div className="orbit-core">
            <span>VS</span>
            <small>ENGINEERING</small>
          </div>
          <ul className="skill-planets">
            <li className="planet planet-react"><i>R</i><span>React</span></li>
            <li className="planet planet-next"><i>N</i><span>Next.js</span></li>
            <li className="planet planet-node"><i>JS</i><span>Node.js</span></li>
            <li className="planet planet-typescript"><i>TS</i><span>TypeScript</span></li>
            <li className="planet planet-api"><i>API</i><span>REST APIs</span></li>
            <li className="planet planet-sql"><i>SQL</i><span>SQL</span></li>
            <li className="planet planet-docker"><i>D</i><span>Docker</span></li>
            <li className="planet planet-tailwind"><i>TW</i><span>Tailwind</span></li>
          </ul>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Building across the stack.</h2>
          <span className="section-count">01 — 03</span>
        </div>

        <article className="featured-project">
          <div className="project-copy">
            <div>
              <span className="project-number">01</span>
              <span className="project-label">AI development workspace</span>
            </div>
            <h3>Polaris</h3>
            <p>
              An AI-powered workspace for creating, editing, previewing, and
              shipping web projects—without breaking creative flow.
            </p>
            <ul className="tag-list" aria-label="Polaris technologies">
              <li>Next.js</li>
              <li>AI SDK</li>
              <li>Convex</li>
              <li>WebContainers</li>
            </ul>
            <a
              className="project-link"
              href="https://github.com/Haasytr/polaris"
              target="_blank"
              rel="noreferrer"
            >
              View repository <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="product-window" aria-label="Polaris interface preview">
            <div className="window-bar">
              <div className="window-mark">P</div>
              <span>polaris / workspace</span>
              <div className="window-actions">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="window-body">
              <aside className="file-rail">
                <strong>EXPLORER</strong>
                <span>⌄ src</span>
                <span className="indent">⌄ app</span>
                <span className="indent-two active-file">page.tsx</span>
                <span className="indent-two">layout.tsx</span>
                <span className="indent">components</span>
                <span>public</span>
              </aside>
              <div className="code-panel">
                <div className="tab-bar">page.tsx <b>×</b></div>
                <div className="code-lines" aria-hidden="true">
                  <span><i>1</i><b className="pink">export default</b> <b className="blue">function</b> Page() &#123;</span>
                  <span><i>2</i>&nbsp;&nbsp;<b className="pink">return</b> (</span>
                  <span><i>3</i>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<b className="green">main</b> <b className="blue">className</b>=<b className="yellow">&quot;hero&quot;</b>&gt;</span>
                  <span><i>4</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<b className="green">h1</b>&gt;Build something</span>
                  <span><i>5</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;remarkable.</span>
                  <span><i>6</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<b className="green">h1</b>&gt;</span>
                  <span><i>7</i>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<b className="green">main</b>&gt;</span>
                  <span><i>8</i>&nbsp;&nbsp;)</span>
                  <span><i>9</i>&#125;</span>
                </div>
              </div>
              <div className="preview-panel">
                <div className="preview-bar">
                  <span>Preview</span>
                  <span>↻</span>
                </div>
                <div className="preview-canvas">
                  <small>FROM IDEA TO INTERFACE</small>
                  <strong>Build something<br />remarkable.</strong>
                  <button type="button">Start creating →</button>
                </div>
              </div>
            </div>
            <div className="prompt-bar">
              <span className="prompt-plus">+</span>
              <span>Ask Polaris to refine the hero section...</span>
              <b>↑</b>
            </div>
          </div>
        </article>

        <div className="project-reveals">
          <details className="project-reveal gamehub-reveal">
            <summary>
              <span className="reveal-number">02</span>
              <div className="reveal-title">
                <span>Streaming platform</span>
                <h3>GameHub</h3>
              </div>
              <p>
                A Twitch-inspired full-stack platform for live video, chat,
                creator dashboards, and community discovery.
              </p>
              <div className="reveal-action">
                <span>Next.js · Prisma · LiveKit</span>
                <b aria-hidden="true">+</b>
              </div>
            </summary>

            <div className="reveal-body">
              <div className="gamehub-window" aria-label="GameHub interface preview">
                <div className="gh-topbar">
                  <strong>G</strong>
                  <span>Explore</span>
                  <span>Following</span>
                  <div className="gh-search">Search channels and categories</div>
                  <i>VS</i>
                </div>
                <div className="gh-shell">
                  <aside className="gh-sidebar">
                    <b>FOLLOWING</b>
                    <div><i className="avatar-purple">V</i><span>vinicius_dev<small>Software</small></span><em>1.2K</em></div>
                    <div><i className="avatar-pink">M</i><span>maya.codes<small>Just Chatting</small></span><em>842</em></div>
                    <div><i className="avatar-blue">R</i><span>react_room<small>Science & Tech</small></span><em>316</em></div>
                    <b>RECOMMENDED</b>
                    <div><i className="avatar-orange">J</i><span>juno_play<small>Indie Games</small></span><em>2.1K</em></div>
                  </aside>
                  <div className="gh-content">
                    <div className="gh-live">
                      <div className="gh-live-copy">
                        <small><i /> LIVE NOW</small>
                        <h4>Building the next<br />great product.</h4>
                        <p>vinicius_dev · Software and Game Development</p>
                        <button type="button">Watch stream →</button>
                      </div>
                      <div className="gh-player">
                        <span>LIVE</span>
                        <div className="play-ring">▶</div>
                        <small>01:42:18</small>
                      </div>
                    </div>
                    <div className="gh-category-title">
                      <strong>Live channels you may like</strong>
                      <span>View all →</span>
                    </div>
                    <div className="gh-streams">
                      <div><span>UI teardown</span><small>maya.codes · 842 viewers</small></div>
                      <div><span>React from scratch</span><small>react_room · 316 viewers</small></div>
                      <div><span>Indie game night</span><small>juno_play · 2.1K viewers</small></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reveal-footer">
                <p>
                  Creator tools, live interaction, discovery, and moderation
                  brought together in one responsive product.
                </p>
                <a
                  href="https://github.com/Haasytr/gamehub"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </details>

          <details className="project-reveal trello-reveal">
            <summary>
              <span className="reveal-number">03</span>
              <div className="reveal-title">
                <span>Collaborative workspace</span>
                <h3>Trello Clone</h3>
              </div>
              <p>
                A polished project-management workspace with organizations,
                boards, drag-and-drop workflows, and secure team access.
              </p>
              <div className="reveal-action">
                <span>Next.js · Prisma · Clerk</span>
                <b aria-hidden="true">+</b>
              </div>
            </summary>

            <div className="reveal-body">
              <div className="trello-window" aria-label="Trello Clone interface preview">
                <div className="tr-topbar">
                  <strong>O</strong>
                  <span>Workspaces⌄</span>
                  <span>Recent⌄</span>
                  <button type="button">Create</button>
                  <div className="tr-search">⌕ Search</div>
                  <i>VS</i>
                </div>
                <div className="tr-board-head">
                  <div>
                    <small>PRODUCT / Q3</small>
                    <h4>Polaris launch</h4>
                  </div>
                  <div className="tr-members">
                    <i>VS</i><i>MA</i><i>RJ</i><b>+4</b>
                    <button type="button">Share</button>
                  </div>
                </div>
                <div className="tr-board">
                  <div className="tr-column">
                    <header><strong>Backlog</strong><span>4</span><b>•••</b></header>
                    <article><i className="tag tag-lime" /><p>Refine onboarding experience</p><small>☷ 4 &nbsp; ◯ 2</small><em>VS</em></article>
                    <article><i className="tag tag-purple" /><p>Set up analytics events</p><small>☑ 1/3</small><em>MA</em></article>
                    <article><i className="tag tag-orange" /><p>Explore pricing page directions</p><small>◯ 5</small><em>RJ</em></article>
                    <button type="button">＋ Add a card</button>
                  </div>
                  <div className="tr-column">
                    <header><strong>In progress</strong><span>3</span><b>•••</b></header>
                    <article className="card-cover"><div>POLARIS</div><i className="tag tag-lime" /><p>Build the project dashboard</p><small>☑ 5/8 &nbsp; ◯ 3</small><em>VS</em></article>
                    <article><i className="tag tag-blue" /><p>GitHub import flow</p><small>☷ 2</small><em>MA</em></article>
                    <button type="button">＋ Add a card</button>
                  </div>
                  <div className="tr-column">
                    <header><strong>Review</strong><span>2</span><b>•••</b></header>
                    <article><i className="tag tag-orange" /><p>Responsive navigation</p><small>☑ 6/6 &nbsp; ◯ 2</small><em>RJ</em></article>
                    <article><i className="tag tag-purple" /><p>Empty states and loading UI</p><small>◯ 4</small><em>VS</em></article>
                    <button type="button">＋ Add a card</button>
                  </div>
                </div>
              </div>
              <div className="reveal-footer">
                <p>
                  A complete collaborative board experience built around fast
                  organization, clear ownership, and fluid task movement.
                </p>
                <a
                  href="https://github.com/Haasytr/trello-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="section-heading light-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Ideas, all the way to production.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <small>{capability.tools}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Engineering for financial complexity.</h2>
          <span className="section-count">2019 — Now</span>
        </div>

        <div className="experience-intro">
          <p className="experience-statement">
            I turn fragmented financial systems into
            <span> dependable product infrastructure.</span>
          </p>
          <p>
            My accounting experience comes from building the software behind
            financial workflows: connecting platforms, normalizing financial
            data, and making reporting APIs reliable for real customers.
          </p>
        </div>

        <article className="finance-experience">
          <div className="finance-copy">
            <div className="role-meta">
              <span>Rutter</span>
              <span>US-based fintech</span>
            </div>
            <p className="role-date">02.2025 — Present</p>
            <h3>Software Engineer</h3>
            <p>
              Designing integrations across accounting, payments, banking, and
              e-commerce—alongside scalable financial reporting APIs for
              Balance Sheets and Profit &amp; Loss statements.
            </p>
            <ul className="finance-tags" aria-label="Financial engineering experience">
              <li>Accounting integrations</li>
              <li>Balance Sheet &amp; P&amp;L</li>
              <li>Bank Feed migrations</li>
              <li>Unit testing</li>
              <li>Customer troubleshooting</li>
            </ul>
          </div>

          <div className="finance-interface" aria-label="Financial integrations interface illustration">
            <div className="finance-topbar">
              <div><i /> FINANCIAL DATA PIPELINE</div>
              <span>All systems operational</span>
            </div>
            <div className="finance-flow">
              <div className="source-list">
                <span>SOURCES</span>
                <div><i>AC</i><p>Accounting platform<small>Connected</small></p><b>✓</b></div>
                <div><i>BK</i><p>Banking provider<small>Connected</small></p><b>✓</b></div>
                <div><i>PY</i><p>Payment processor<small>Connected</small></p><b>✓</b></div>
                <div><i>EC</i><p>Commerce platform<small>Connected</small></p><b>✓</b></div>
              </div>
              <div className="pipeline-core">
                <div className="pipeline-mark">R</div>
                <span>UNIFIED API</span>
                <small>Normalize · Validate · Sync</small>
              </div>
              <div className="report-list">
                <div className="report-head">
                  <span>FINANCIAL REPORTS</span>
                  <small>Last sync: now</small>
                </div>
                <div className="report-row">
                  <i>01</i>
                  <p>Balance Sheet<small>Assets · Liabilities · Equity</small></p>
                  <b>Ready</b>
                </div>
                <div className="report-row">
                  <i>02</i>
                  <p>Profit &amp; Loss<small>Revenue · Expenses · Net income</small></p>
                  <b>Ready</b>
                </div>
                <div className="report-row">
                  <i>03</i>
                  <p>Bank Feed<small>Transactions · Reconciliation</small></p>
                  <b>Synced</b>
                </div>
                <div className="report-chart" aria-hidden="true">
                  <span style={{ height: "38%" }} />
                  <span style={{ height: "56%" }} />
                  <span style={{ height: "47%" }} />
                  <span style={{ height: "72%" }} />
                  <span style={{ height: "64%" }} />
                  <span style={{ height: "88%" }} />
                  <span style={{ height: "78%" }} />
                  <span style={{ height: "96%" }} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="career-timeline">
          <article>
            <span>2024 — 2025</span>
            <h3>Frontend Developer</h3>
            <strong>LXP EAD</strong>
            <p>
              Improved product performance and UX, refactored scalable
              templates, and delivered secure API integrations.
            </p>
          </article>
          <article>
            <span>2019 — 2022</span>
            <h3>Freelance Frontend Developer</h3>
            <strong>Independent</strong>
            <p>
              Built responsive React and Next.js applications, integrated REST
              APIs, and delivered client-focused products.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow">A little context</p>
        <div className="about-grid">
          <h2>
            Curiosity got me into code.
            <span>Craft keeps me here.</span>
          </h2>
          <div>
            <p>
              I started experimenting with the web at fourteen. Today, I build
              across frontend and backend, combining engineering discipline with
              a strong eye for the experience people actually use.
            </p>
            <p>
              I care about thoughtful details, maintainable systems, and
              products that make complex things feel simple.
            </p>
            <p>
              Working in fintech has also given me a practical understanding of
              accounting data, financial statements, and the reliability
              required when software moves business-critical information.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/vinicius-oliveira-a666941b1/"
              target="_blank"
              rel="noreferrer"
            >
              More on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <p className="eyebrow">Start a conversation</p>
          <span>Open to ambitious teams and products</span>
        </div>
        <h2>Have something worth building?</h2>
        <a className="email-link" href="mailto:viniciuszero@live.com">
          viniciuszero@live.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>© 2026 Vinicius Santos</span>
          <div>
            <a href="https://github.com/Haasytr" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vinicius-oliveira-a666941b1/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
