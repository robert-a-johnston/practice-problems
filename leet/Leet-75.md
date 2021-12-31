## Array

- [Two Sum](https://leetcode.com/problems/two-sum/) (easy)
  - use hash table to make O(n^2) -> O(n) use [.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) (easy)
  - change the input string to track profit
- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) (easy)
  - use hashMap with const hashMap = new Map then .set to create
- [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) (medium)
  - calculate right and left arrays and multiply together
- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (easy)
  - use kadane's algorithm/ dynamic programming
- [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) (medium)
  - hint: kadane's algorithm
- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) (medium)
  - use binary search look for center then recursion
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) (medium)
  - binary search for pivot point to create two arrays and then binary search for target
- [3Sum](https://leetcode.com/problems/3sum/) (medium)
  - sort array, create two pointers at each end of array, and a while in a for loop.
- [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) (medium) 
  - start from 'right side' of array
  
## Binary

- [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) (medium)
  - use bitwise operators ^ % <<
- [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) (easy)
  - when change toString(2) to make sure binary number
- [Counting Bits](https://leetcode.com/problems/counting-bits/) (easy)
  - use previous values to calculate later values base on odd/even
- [Missing Number](https://leetcode.com/problems/missing-number/) (easy)
  - subtract expected(using n.length) from actual(using reduce) of whole array
- [Reverse Bits](https://leetcode.com/problems/reverse-bits/) (easy)
  - adjust length by 32 - n.length in for loop for leading 0s

## Dynamic Programming

- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) (easy)
- [Coin Change](https://leetcode.com/problems/coin-change/) (medium)
- [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) (medium)
- [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) (medium)
  - 2d table/array
- [Word Break Problem](https://leetcode.com/problems/word-break/)(medium)
  - use table with target
- [Combination Sum](https://leetcode.com/problems/combination-sum-iv/)(medium)
  - use table with target, have to use 2 for loops
- [House Robber](https://leetcode.com/problems/house-robber/)(medium)
  - Max of n - 1 or n - 2, set up defaults for [] array lengths 1 and 2
- [House Robber II](https://leetcode.com/problems/house-robber-ii/) (medium)
- [Decode Ways](https://leetcode.com/problems/decode-ways/) (medium)
  - do not need to decode, just if check one and 2 digits
- [Unique Paths](https://leetcode.com/problems/unique-paths/) (medium)
  - can be done using tabulation or memoization (fib variation)
- [Jump Game](https://leetcode.com/problems/jump-game/) (medium)
  - start at end of array

Graph

- [Clone Graph](https://leetcode.com/problems/clone-graph/) (medium)
  - use hashmap to keep track of what has been visited & dfs or bfs
- [Course Schedule](https://leetcode.com/problems/course-schedule/) (medium)
  - NEED TO REVIEW
- [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) (medium)
  - NEED TO REVIEW
- [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)(medium)
  - Use a set and check for numbers before and after.


Interval

- [Insert Interval](https://leetcode.com/problems/insert-interval/)(medium)
  - O(n) check prior and next values
- [Merge Intervals](https://leetcode.com/problems/merge-intervals/)(medium)
- [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)(medium)


Linked List

- [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)(easy)
  - note need to run within leet because of linked list
- [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/)(easy)
  - fast pointer, slow pointer
- [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)(medium)
- [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)(medium)
- [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)(medium)
- [Reorder List](https://leetcode.com/problems/reorder-list/)(medium)

Matrix

- Set Matrix Zeroes - https://leetcode.com/problems/set-matrix-zeroes/
- Spiral Matrix - https://leetcode.com/problems/spiral-matrix/
- Rotate Image - https://leetcode.com/problems/rotate-image/
- Word Search - https://leetcode.com/problems/word-search/
String

- Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters/
- Longest Repeating Character Replacement - https://leetcode.com/problems/longest-repeating-character-replacement/
- Minimum Window Substring - https://leetcode.com/problems/minimum-window-substring/
- Valid Anagram - https://leetcode.com/problems/valid-anagram/
- Group Anagrams - https://leetcode.com/problems/group-anagrams/
- Valid Parentheses - https://leetcode.com/problems/valid-parentheses/
- Valid Palindrome - https://leetcode.com/problems/valid-palindrome/
- Longest Palindromic Substring - https://leetcode.com/problems/longest-palindromic-substring/
- Palindromic Substrings - https://leetcode.com/problems/palindromic-substrings/
- Encode and Decode Strings (Leetcode Premium) - https://leetcode.com/problems/encode-and-decode-strings/

Tree

- Maximum Depth of Binary Tree - https://leetcode.com/problems/maximum-depth-of-binary-tree/
- Same Tree - https://leetcode.com/problems/same-tree/
- Invert/Flip Binary Tree - https://leetcode.com/problems/invert-binary-tree/
- Binary Tree Maximum Path Sum - https://leetcode.com/problems/binary-tree-maximum-path-sum/
- Binary Tree Level Order Traversal - https://leetcode.com/problems/binary-tree-level-order-traversal/
- Serialize and Deserialize Binary Tree - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
- Subtree of Another Tree - https://leetcode.com/problems/subtree-of-another-tree/
- Construct Binary Tree from Preorder and Inorder Traversal - https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
- Validate Binary Search Tree - https://leetcode.com/problems/validate-binary-search-tree/
- Kth Smallest Element in a BST - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
- Lowest Common Ancestor of BST - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
- Implement Trie (Prefix Tree) - https://leetcode.com/problems/implement-trie-prefix-tree/
- Add and Search Word - https://leetcode.com/problems/add-and-search-word-data-structure-design/
- Word Search II - https://leetcode.com/problems/word-search-ii/

---

Heap

- Merge K Sorted Lists - https://leetcode.com/problems/merge-k-sorted-lists/
- Top K Frequent Elements - https://leetcode.com/problems/top-k-frequent-elements/
- Find Median from Data Stream - https://leetcode.com/problems/find-median-from-data-stream/
