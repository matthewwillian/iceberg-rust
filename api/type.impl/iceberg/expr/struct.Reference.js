(function() {var type_impls = {
"iceberg":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Bind-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#309-339\">source</a><a href=\"#impl-Bind-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"iceberg/expr/trait.Bind.html\" title=\"trait iceberg::expr::Bind\">Bind</a> for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bound\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bound\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iceberg/expr/trait.Bind.html#associatedtype.Bound\" class=\"associatedtype\">Bound</a> = <a class=\"struct\" href=\"iceberg/expr/struct.BoundReference.html\" title=\"struct iceberg::expr::BoundReference\">BoundReference</a></h4></section></summary><div class='docblock'>The type of the bound result.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#312-338\">source</a><a href=\"#method.bind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iceberg/expr/trait.Bind.html#tymethod.bind\" class=\"fn\">bind</a>(&amp;self, schema: <a class=\"type\" href=\"iceberg/spec/type.SchemaRef.html\" title=\"type iceberg::spec::SchemaRef\">SchemaRef</a>, case_sensitive: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>) -&gt; <a class=\"type\" href=\"iceberg/type.Result.html\" title=\"type iceberg::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"iceberg/expr/trait.Bind.html#associatedtype.Bound\" title=\"type iceberg::expr::Bind::Bound\">Bound</a>&gt;</h4></section></summary><div class='docblock'>Bind an expression to a schema.</div></details></div></details>","Bind","iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#impl-Clone-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#impl-Debug-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.205/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.205/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.205/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.205/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.205/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#303-307\">source</a><a href=\"#impl-Display-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#304-306\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#impl-PartialEq-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#42-52\">source</a><a href=\"#impl-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#44-46\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.new\" class=\"fn\">new</a>(name: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new unbound reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#49-51\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Return the name of this reference.</p>\n</div></details></div></details>",0,"iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#54-301\">source</a><a href=\"#impl-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.less_than\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#66-72\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.less_than\" class=\"fn\">less_than</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an less than expression. For example, <code>a &lt; 10</code>.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).less_than(Datum::long(<span class=\"number\">10</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a &lt; 10\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.less_than_or_equal_to\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#85-91\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.less_than_or_equal_to\" class=\"fn\">less_than_or_equal_to</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an less than or equal to expression. For example, <code>a &lt;= 10</code>.</p>\n<h5 id=\"example-1\"><a class=\"doc-anchor\" href=\"#example-1\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).less_than_or_equal_to(Datum::long(<span class=\"number\">10</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a &lt;= 10\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.greater_than\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#104-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.greater_than\" class=\"fn\">greater_than</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an greater than expression. For example, <code>a &gt; 10</code>.</p>\n<h5 id=\"example-2\"><a class=\"doc-anchor\" href=\"#example-2\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).greater_than(Datum::long(<span class=\"number\">10</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a &gt; 10\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.greater_than_or_equal_to\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#123-129\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.greater_than_or_equal_to\" class=\"fn\">greater_than_or_equal_to</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates a greater-than-or-equal-to than expression. For example, <code>a &gt;= 10</code>.</p>\n<h5 id=\"example-3\"><a class=\"doc-anchor\" href=\"#example-3\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).greater_than_or_equal_to(Datum::long(<span class=\"number\">10</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a &gt;= 10\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.equal_to\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#142-144\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.equal_to\" class=\"fn\">equal_to</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an equal-to expression. For example, <code>a = 10</code>.</p>\n<h5 id=\"example-4\"><a class=\"doc-anchor\" href=\"#example-4\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).equal_to(Datum::long(<span class=\"number\">10</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a = 10\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.not_equal_to\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#157-159\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.not_equal_to\" class=\"fn\">not_equal_to</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates a not equal-to expression. For example, <code>a!= 10</code>.</p>\n<h5 id=\"example-5\"><a class=\"doc-anchor\" href=\"#example-5\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).not_equal_to(Datum::long(<span class=\"number\">10</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a != 10\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.starts_with\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#172-178\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.starts_with\" class=\"fn\">starts_with</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates a start-with expression. For example, <code>a STARTS WITH &quot;foo&quot;</code>.</p>\n<h5 id=\"example-6\"><a class=\"doc-anchor\" href=\"#example-6\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).starts_with(Datum::string(<span class=\"string\">\"foo\"</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">r#\"a STARTS WITH \"foo\"\"#</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.not_starts_with\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#192-198\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.not_starts_with\" class=\"fn\">not_starts_with</a>(self, datum: <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates a not start-with expression. For example, <code>a NOT STARTS WITH 'foo'</code>.</p>\n<h5 id=\"example-7\"><a class=\"doc-anchor\" href=\"#example-7\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).not_starts_with(Datum::string(<span class=\"string\">\"foo\"</span>));\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">r#\"a NOT STARTS WITH \"foo\"\"#</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_nan\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#211-213\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.is_nan\" class=\"fn\">is_nan</a>(self) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an is-nan expression. For example, <code>a IS NAN</code>.</p>\n<h5 id=\"example-8\"><a class=\"doc-anchor\" href=\"#example-8\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).is_nan();\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a IS NAN\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_not_nan\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#226-228\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.is_not_nan\" class=\"fn\">is_not_nan</a>(self) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an is-not-nan expression. For example, <code>a IS NOT NAN</code>.</p>\n<h5 id=\"example-9\"><a class=\"doc-anchor\" href=\"#example-9\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).is_not_nan();\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a IS NOT NAN\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_null\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#241-243\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.is_null\" class=\"fn\">is_null</a>(self) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an is-null expression. For example, <code>a IS NULL</code>.</p>\n<h5 id=\"example-10\"><a class=\"doc-anchor\" href=\"#example-10\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).is_null();\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a IS NULL\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_not_null\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#256-258\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.is_not_null\" class=\"fn\">is_not_null</a>(self) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an is-not-null expression. For example, <code>a IS NOT NULL</code>.</p>\n<h5 id=\"example-11\"><a class=\"doc-anchor\" href=\"#example-11\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).is_not_null();\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">&amp;</span><span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>), <span class=\"string\">\"a IS NOT NULL\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_in\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#273-279\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.is_in\" class=\"fn\">is_in</a>(self, literals: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>&gt;) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an is-in expression. For example, <code>a IS IN (5, 6)</code>.</p>\n<h5 id=\"example-12\"><a class=\"doc-anchor\" href=\"#example-12\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>fnv::FnvHashSet;\n<span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).is_in([Datum::long(<span class=\"number\">5</span>), Datum::long(<span class=\"number\">6</span>)]);\n\n<span class=\"kw\">let </span>as_string = <span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>);\n<span class=\"macro\">assert!</span>(<span class=\"kw-2\">&amp;</span>as_string == <span class=\"string\">\"a IN (5, 6)\" </span>|| <span class=\"kw-2\">&amp;</span>as_string == <span class=\"string\">\"a IN (6, 5)\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_not_in\" class=\"method\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#294-300\">source</a><h4 class=\"code-header\">pub fn <a href=\"iceberg/expr/struct.Reference.html#tymethod.is_not_in\" class=\"fn\">is_not_in</a>(self, literals: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"iceberg/spec/struct.Datum.html\" title=\"struct iceberg::spec::Datum\">Datum</a>&gt;) -&gt; <a class=\"enum\" href=\"iceberg/expr/enum.Predicate.html\" title=\"enum iceberg::expr::Predicate\">Predicate</a></h4></section></summary><div class=\"docblock\"><p>Creates an is-not-in expression. For example, <code>a IS NOT IN (5, 6)</code>.</p>\n<h5 id=\"example-13\"><a class=\"doc-anchor\" href=\"#example-13\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>fnv::FnvHashSet;\n<span class=\"kw\">use </span>iceberg::expr::Reference;\n<span class=\"kw\">use </span>iceberg::spec::Datum;\n<span class=\"kw\">let </span>expr = Reference::new(<span class=\"string\">\"a\"</span>).is_not_in([Datum::long(<span class=\"number\">5</span>), Datum::long(<span class=\"number\">6</span>)]);\n\n<span class=\"kw\">let </span>as_string = <span class=\"macro\">format!</span>(<span class=\"string\">\"{expr}\"</span>);\n<span class=\"macro\">assert!</span>(<span class=\"kw-2\">&amp;</span>as_string == <span class=\"string\">\"a NOT IN (5, 6)\" </span>|| <span class=\"kw-2\">&amp;</span>as_string == <span class=\"string\">\"a NOT IN (6, 5)\"</span>);</code></pre></div>\n</div></details></div></details>",0,"iceberg::expr::term::Term"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#impl-Serialize-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.205/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.205/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.205/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.205/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.205/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.205/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","iceberg::expr::term::Term"],["<section id=\"impl-StructuralPartialEq-for-Reference\" class=\"impl\"><a class=\"src rightside\" href=\"src/iceberg/expr/term.rs.html#37\">source</a><a href=\"#impl-StructuralPartialEq-for-Reference\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"iceberg/expr/struct.Reference.html\" title=\"struct iceberg::expr::Reference\">Reference</a></h3></section>","StructuralPartialEq","iceberg::expr::term::Term"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()