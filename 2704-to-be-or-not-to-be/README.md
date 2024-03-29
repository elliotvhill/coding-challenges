<h2><a href="https://leetcode.com/problems/to-be-or-not-to-be/">2704. To Be Or Not To Be</a></h2><h3>Easy</h3><hr><div><p>Write a function expect that helps developers test their code. It should take in any value <code>val</code> and return an object with the following two functions.

* <code>toBe(val)</code> accepts another value and returns <code>true</code> if the two values <code>===</code> each other. If they are not equal, it should throw an error <code>"Not Equal"</code>.
* <code>notToBe(val)</code> accepts another value and returns <code>true</code> if the two values <code>!==</code> each other. If they are equal, it should throw an error <code>"Equal"</code>.</p>


<p><strong class="example">Example 1:</strong></p>
<pre><strong><code>Input:</code></strong><code>func = () => expect(5).toBe(5)</code>
<strong>Output:</strong> <code>{"value": true}</code>
<strong>Explanation:</strong><code>5 === 5 so this expression returns true.</code>
</pre>

<p><strong class="example">Example 2:</strong></p>
<pre><strong><code>Input:</code></strong><code>func = () => expect(5).toBe(null)</code>
<strong>Output:</strong> <code>{"error": "Not Equal"}</code>
<strong>Explanation:</strong><code>5 !== null so this expression throw the error "Not Equal".</code>
</pre>
</pre>

<p><strong class="example">Example 3:</strong></p>
<pre><strong><code>Input:</code></strong><code>func = () => expect(5).notToBe(null)</code>
<strong>Output:</strong> <code>{"value": true}</code>
<strong>Explanation:</strong><code>5 !== null so this expression returns true.</code>
</pre>
