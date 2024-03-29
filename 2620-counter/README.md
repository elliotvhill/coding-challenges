<h2><a href="https://leetcode.com/problems/counter/">2620. Counter</a></h2><h3>Easy</h3><hr><div><p>Given an integer <code>n</code>, return a <code>counter</code> function. This <code>counter</code> function initially returns <code>n</code> and then returns 1 more than the previous value every subsequent time it is called (<code>n</code>, <code>n + 1</code>, <code>n + 2</code>, etc).</p>


<p><strong class="example">Example 1:</strong></p>
<pre><strong><code>Input:</code></strong> 
<code>n = 10
["call","call","call"]</code>
<strong>Output:</strong> <code>[10,11,12]</code>
<strong>Explanation:</strong> 
<code>counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.</code>
</pre>

<p><strong class="example">Example 2:</strong></p>
<pre><strong><code>Input:</code></strong> 
<code>n = -2
["call","call","call","call","call"]</code>
<strong><code>Output:</code></strong> 
<code>[-2,-1,0,1,2]</code>
<strong><code>Explanation:</strong> counter() initially returns -2. Then increases after each sebsequent call.</code>
</pre>


<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>-1000 <= n <= 1000</code></li>
	<li><code>0 <= calls.length <= 1000</code></li>
	<li><code>calls[i] === "call"</code></li>
</ul>