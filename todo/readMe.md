<h1 data-start="184" data-end="219">📝 <strong data-start="189" data-end="219">Todo API – Express + Redis</strong></h1>
<p data-start="221" data-end="288">A lightweight, high-performance <strong data-start="253" data-end="275">Todo CRUD REST API</strong> built using:</p>
<ul data-start="290" data-end="378">
<li data-start="290" data-end="313">
<p data-start="292" data-end="313"><strong data-start="292" data-end="313">Node.js + Express</strong></p>
</li>
<li data-start="314" data-end="350">
<p data-start="316" data-end="350"><strong data-start="316" data-end="350">Redis (Hash storage for todos)</strong></p>
</li>
<li data-start="351" data-end="378">
<p data-start="353" data-end="378"><strong data-start="353" data-end="378">UUID-based unique IDs</strong></p>
</li>
</ul>
<p data-start="380" data-end="478">This project demonstrates clean API design, Redis-based persistence, and modular utility handling.</p>
<hr data-start="480" data-end="483">
<h2 data-start="485" data-end="503">🚀 <strong data-start="491" data-end="503">Features</strong></h2>
<ul data-start="505" data-end="727">
<li data-start="505" data-end="522">
<p data-start="507" data-end="522">Create a todo</p>
</li>
<li data-start="523" data-end="552">
<p data-start="525" data-end="552">Get a specific todo by ID</p>
</li>
<li data-start="553" data-end="570">
<p data-start="555" data-end="570">Get all todos</p>
</li>
<li data-start="571" data-end="608">
<p data-start="573" data-end="608">Update a todo (title / completed)</p>
</li>
<li data-start="609" data-end="626">
<p data-start="611" data-end="626">Delete a todo</p>
</li>
<li data-start="627" data-end="669">
<p data-start="629" data-end="669">Lightweight Redis storage using Hashes</p>
</li>
<li data-start="670" data-end="727">
<p data-start="672" data-end="727">Modular utility functions (<code data-start="699" data-end="710">redisUtil</code>, <code data-start="712" data-end="724">formatUtil</code>)</p>
</li>
</ul>
<hr data-start="729" data-end="732">
<h2 data-start="734" data-end="761">📦 <strong data-start="740" data-end="761">Project Structure</strong></h2>
<pre class="overflow-visible!" data-start="763" data-end="885"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span><span class="hljs-attribute">root</span></span><span>
│
├── todo.js               </span><span><span class="hljs-comment"># main server</span></span><span>
├── package.json
└── README.md             </span><span><span class="hljs-comment"># you're reading this :)</span></span><span>
</span></span></code></div></div></pre>
<hr data-start="887" data-end="890">
<h2 data-start="892" data-end="913">🛠️ <strong data-start="899" data-end="913">Tech Stack</strong></h2>
<div class="TyagGW_tableContainer"><div tabindex="-1" class="group TyagGW_tableWrapper flex w-fit flex-col-reverse">
Component | Usage
-- | --
Express | HTTP Server & Routing
Redis | Persistent NoSQL storage
UUID | Unique ID generation
Node.js | Runtime

</div></div>
<p data-start="3104" data-end="3159">Efficient, fast, perfect for caching or small datasets.</p>
<hr data-start="3161" data-end="3164">
<h1 data-start="3166" data-end="3188">🧪 <strong data-start="3171" data-end="3188">Testing Tools</strong></h1>
<p data-start="3190" data-end="3218">You may test the APIs using:</p>
<h3 data-start="3220" data-end="3233">🔸 cURL</h3>
<h3 data-start="3234" data-end="3250">🔸 Postman</h3>
<h3 data-start="3251" data-end="3284">🔸 Thunder Client (VS Code)</h3>
<h3 data-start="3285" data-end="3302">🔸 Insomnia</h3>
<hr data-start="3304" data-end="3307">
<h1 data-start="3309" data-end="3337">🚧 <strong data-start="3314" data-end="3337">Future Improvements</strong></h1>
<p data-start="3339" data-end="3364">These can be added later:</p>
<ul data-start="3366" data-end="3561">
<li data-start="3366" data-end="3405">
<p data-start="3368" data-end="3405">Create Todo validation with Joi/Zod</p>
</li>
<li data-start="3406" data-end="3441">
<p data-start="3408" data-end="3441">Migrate to MVC folder structure</p>
</li>
<li data-start="3442" data-end="3460">
<p data-start="3444" data-end="3460">Add TypeScript</p>
</li>
<li data-start="3461" data-end="3498">
<p data-start="3463" data-end="3498">Add Redis TTL (auto-expire todos)</p>
</li>
<li data-start="3499" data-end="3521">
<p data-start="3501" data-end="3521">Add authentication</p>
</li>
<li data-start="3522" data-end="3561">
<p data-start="3524" data-end="3561">Add pagination for large todo lists</p>
</li>
</ul>
<hr data-start="3563" data-end="3566">
<h1 data-start="3568" data-end="3585">🤝 Contributing</h1>
<p data-start="3587" data-end="3641">Feel free to submit PRs, suggestions, or improvements.</p>
<hr data-start="3643" data-end="3646">
<h1 data-start="3648" data-end="3669">🐛 Reporting Issues</h1>
<p data-start="3671" data-end="3731">If you find bugs or unexpected behavior, open an issue with:</p>
<ul data-start="3733" data-end="3820">
<li data-start="3733" data-end="3755">
<p data-start="3735" data-end="3755">Steps to reproduce</p>
</li>
<li data-start="3756" data-end="3777">
<p data-start="3758" data-end="3777">Expected behavior</p>
</li>
<li data-start="3778" data-end="3797">
<p data-start="3780" data-end="3797">Actual behavior</p>
</li>
<li data-start="3798" data-end="3820">
<p data-start="3800" data-end="3820">Logs (if possible)</p>
</li>
</ul>
<hr data-start="3822" data-end="3825">
<h1 data-start="3827" data-end="3847">❤️ Acknowledgments</h1>
<p data-start="3849" data-end="3979">This project was built while learning Express, Redis, and backend flow — aiming for clean code structure and deeper understanding.</p>