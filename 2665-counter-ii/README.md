<<<<<<< HEAD
<h2><a href="#">2665. Counter II</a></h2><h3>Easy</h3><hr><div><p>Write a function <code>createCounter</code>. It should accept an initial integer <code>init</code>. It should return an object with three functions.

The three functions are:

* <code>increment()</code> increases the current value by 1 and then returns it.
* <code>decrement()</code> reduces the current value by 1 and then returns it.
* <code>reset()</code> sets the current value to <code>init</code> and then returns it.</p>


<p><strong class="example">Example 1:</strong></p>
<pre><strong><code>Input:</code></strong><code>init = 5, calls = ["increment","reset","decrement"]</code>
<strong>Output:</strong> <code>[6,5,4]</code>
<strong>Explanation:</strong><code>
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4</code>
</pre>

<p><strong class="example">Example 2:</strong></p>
<pre><strong><code>Input:</code></strong><code>init = 0, calls = ["increment","increment","decrement","reset","reset"]</code>
<strong>Output:</strong> <code>[1,2,1,0,0]</code>
<strong>Explanation:</strong><code>
=======
<h2><a href="https://leetcode.com/problems/counter-ii/">2665. Counter II</a></h2><h3>Easy</h3><hr><div><p>Write a function&nbsp;<code>createCounter</code>. It should accept an initial integer&nbsp;<code>init</code>. It should return an object with three functions.</p>

<p>The three functions are:</p>

<ul>
	<li><code>increment()</code>&nbsp;increases&nbsp;the current value by 1 and then returns it.</li>
	<li><code>decrement()</code>&nbsp;reduces the current value by 1 and then returns it.</li>
	<li><code>reset()</code>&nbsp;sets the current value to&nbsp;<code>init</code>&nbsp;and then returns it.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> init = 5, calls = ["increment","reset","decrement"]
<strong>Output:</strong> [6,5,4]
<strong>Explanation:</strong>
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> init = 0, calls = ["increment","increment","decrement","reset","reset"]
<strong>Output:</strong> [1,2,1,0,0]
<strong>Explanation:</strong>
>>>>>>> 3677048dc8fcee0e8f0ba4b9152e5ced45089816
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
<<<<<<< HEAD
counter.reset(); // 0</code>
</pre>


<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>-1000 <= init <= 1000</code></li>
	<li><code>0 <= calls.length <= 1000</code></li>
	<li><code>calls[i]</code> is one of "increment", "decrement" and "reset"
</li>
</ul>
=======
counter.reset(); // 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-1000 &lt;= init &lt;= 1000</code></li>
	<li><code>0 &lt;= calls.length &lt;= 1000</code></li>
	<li><code>calls[i]</code> is one of "increment", "decrement" and&nbsp;"reset"</li>
</ul>
</div>
>>>>>>> 3677048dc8fcee0e8f0ba4b9152e5ced45089816
