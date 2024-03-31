<h2><a href="#">2635. Apply Transform Over Each Element in Array</a></h2><h3>Easy</h3><hr>
<div><p>Given an integer array <code>arr</code> and a mapping function <code>fn</code>, return a new array with a transformation applied to each element.

The returned array should be created such that <code>returnedArray[i] = fn(arr[i], i)</code>.

Please solve it without the built-in <code>Array.map</code> method.</p>


<p><strong class="example">Example 1:</strong></p>
<pre><strong><code>Input:</code></strong><code>arr = [1,2,3], fn = function plusone(n) { return n + 1; }</code>
<strong>Output:</strong> <code>[2,3,4]</code>
<strong>Explanation:</strong><code>
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.</code>
</pre>

<p><strong class="example">Example 2:</strong></p>
<pre><strong><code>Input:</code></strong><code>arr = [1,2,3], fn = function plusI(n, i) { return n + i; }</code>
<strong>Output:</strong> <code>[1,3,5]</code>
<strong>Explanation:</strong><code>The function increases each value by the index it resides in.</code>
</pre>

<p><strong class="example">Example 3:</strong></p>
<pre><strong><code>Input:</code></strong><code>arr = [10,20,30], fn = function constant() { return 42; }</code>
<strong>Output:</strong> <code>[42,42,42]</code>
<strong>Explanation:</strong><code>The function always returns 42.</code>
</pre>


<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>0 <= arr.length <= 1000</code></li>
	<li><code>-109 <= arr[i] <= 109</code></li>
	<li><code>fn</code> returns a number</li>
</ul>