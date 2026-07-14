export interface DSAProblemItem {
  title: string;
  difficulty?: "EASY" | "MEDIUM" | "HARD";
  topic?: string;
  companies?: string[];
  leetcodeUrl?: string;
  description?: string;
  primaryUrl?: string;
  solutionUrl?: string;
  youtubeUrl?: string;
}

export const dsaProblems: DSAProblemItem[] = [
  {
    "title": "Two Sum",
    "difficulty": "EASY",
    "topic": "Arrays & Hashing",
    "companies": [
      "Google",
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/two-sum/",
    "solutionUrl": "https://leetcode.com/problems/two-sum/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=two+sum+leetcode+explanation"
  },
  {
    "title": "Contains Duplicate",
    "difficulty": "EASY",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Yahoo",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate/",
    "solutionUrl": "https://leetcode.com/problems/contains-duplicate/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=contains+duplicate+leetcode"
  },
  {
    "title": "Valid Anagram",
    "difficulty": "EASY",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Uber",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
    "solutionUrl": "https://leetcode.com/problems/valid-anagram/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=valid+anagram+leetcode"
  },
  {
    "title": "Group Anagrams",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Meta",
      "Uber",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/",
    "solutionUrl": "https://leetcode.com/problems/group-anagrams/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=group+anagrams+leetcode"
  },
  {
    "title": "Top K Frequent Elements",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/",
    "solutionUrl": "https://leetcode.com/problems/top-k-frequent-elements/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=top+k+frequent+elements+leetcode"
  },
  {
    "title": "Product of Array Except Self",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/",
    "solutionUrl": "https://leetcode.com/problems/product-of-array-except-self/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=product+of+array+except+self+leetcode"
  },
  {
    "title": "Valid Sudoku",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Uber",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-sudoku/",
    "solutionUrl": "https://leetcode.com/problems/valid-sudoku/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=valid+sudoku+leetcode"
  },
  {
    "title": "Longest Consecutive Sequence",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "solutionUrl": "https://leetcode.com/problems/longest-consecutive-sequence/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=longest+consecutive+sequence+leetcode"
  },
  {
    "title": "Encode and Decode Strings",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/encode-and-decode-strings/",
    "solutionUrl": "https://leetcode.com/problems/encode-and-decode-strings/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=encode+and+decode+strings+leetcode"
  },
  {
    "title": "Subarray Sum Equals K",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Facebook",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "solutionUrl": "https://leetcode.com/problems/subarray-sum-equals-k/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=subarray+sum+equals+k+leetcode"
  },
  {
    "title": "Majority Element",
    "difficulty": "EASY",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Adobe"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/majority-element/",
    "solutionUrl": "https://leetcode.com/problems/majority-element/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=majority+element+leetcode+boyer+moore"
  },
  {
    "title": "Rotate Array",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/rotate-array/",
    "solutionUrl": "https://leetcode.com/problems/rotate-array/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=rotate+array+leetcode"
  },
  {
    "title": "Set Matrix Zeroes",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/",
    "solutionUrl": "https://leetcode.com/problems/set-matrix-zeroes/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=set+matrix+zeroes+leetcode"
  },
  {
    "title": "Spiral Matrix",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/",
    "solutionUrl": "https://leetcode.com/problems/spiral-matrix/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=spiral+matrix+leetcode"
  },
  {
    "title": "Find All Duplicates in an Array",
    "difficulty": "MEDIUM",
    "topic": "Arrays & Hashing",
    "companies": [
      "Amazon",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    "solutionUrl": "https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=find+all+duplicates+in+an+array+leetcode"
  },
  {
    "title": "Valid Palindrome",
    "difficulty": "EASY",
    "topic": "Two Pointers",
    "companies": [
      "Meta",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/",
    "solutionUrl": "https://leetcode.com/problems/valid-palindrome/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=valid+palindrome+leetcode"
  },
  {
    "title": "Two Sum II - Input Array Is Sorted",
    "difficulty": "MEDIUM",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "solutionUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=two+sum+2+sorted+array+leetcode"
  },
  {
    "title": "3Sum",
    "difficulty": "MEDIUM",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/3sum/",
    "solutionUrl": "https://leetcode.com/problems/3sum/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=3sum+leetcode"
  },
  {
    "title": "Container With Most Water",
    "difficulty": "MEDIUM",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/",
    "solutionUrl": "https://leetcode.com/problems/container-with-most-water/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=container+with+most+water+leetcode"
  },
  {
    "title": "Trapping Rain Water",
    "difficulty": "HARD",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Google",
      "Apple",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "solutionUrl": "https://leetcode.com/problems/trapping-rain-water/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=trapping+rain+water+leetcode"
  },
  {
    "title": "Sort Colors",
    "difficulty": "MEDIUM",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/sort-colors/",
    "solutionUrl": "https://leetcode.com/problems/sort-colors/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=sort+colors+leetcode+dutch+national+flag"
  },
  {
    "title": "Remove Duplicates from Sorted Array",
    "difficulty": "EASY",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "solutionUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=remove+duplicates+from+sorted+array+leetcode"
  },
  {
    "title": "Move Zeroes",
    "difficulty": "EASY",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Meta",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/move-zeroes/",
    "solutionUrl": "https://leetcode.com/problems/move-zeroes/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=move+zeroes+leetcode"
  },
  {
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "EASY",
    "topic": "Sliding Window",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "solutionUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=best+time+to+buy+and+sell+stock+leetcode"
  },
  {
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "MEDIUM",
    "topic": "Sliding Window",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "solutionUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=longest+substring+without+repeating+characters+leetcode"
  },
  {
    "title": "Longest Repeating Character Replacement",
    "difficulty": "MEDIUM",
    "topic": "Sliding Window",
    "companies": [
      "Google",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "solutionUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=longest+repeating+character+replacement+leetcode"
  },
  {
    "title": "Permutation in String",
    "difficulty": "MEDIUM",
    "topic": "Sliding Window",
    "companies": [
      "Microsoft",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/permutation-in-string/",
    "solutionUrl": "https://leetcode.com/problems/permutation-in-string/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=permutation+in+string+leetcode"
  },
  {
    "title": "Minimum Window Substring",
    "difficulty": "HARD",
    "topic": "Sliding Window",
    "companies": [
      "Meta",
      "Amazon",
      "Google",
      "Uber"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "solutionUrl": "https://leetcode.com/problems/minimum-window-substring/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=minimum+window+substring+leetcode"
  },
  {
    "title": "Sliding Window Maximum",
    "difficulty": "HARD",
    "topic": "Sliding Window",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/",
    "solutionUrl": "https://leetcode.com/problems/sliding-window-maximum/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=sliding+window+maximum+leetcode"
  },
  {
    "title": "Fruit Into Baskets",
    "difficulty": "MEDIUM",
    "topic": "Sliding Window",
    "companies": [
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/fruit-into-baskets/",
    "solutionUrl": "https://leetcode.com/problems/fruit-into-baskets/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=fruit+into+baskets+leetcode"
  },
  {
    "title": "Max Consecutive Ones III",
    "difficulty": "MEDIUM",
    "topic": "Sliding Window",
    "companies": [
      "Google",
      "Facebook"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "solutionUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=max+consecutive+ones+iii+leetcode"
  },
  {
    "title": "Valid Parentheses",
    "difficulty": "EASY",
    "topic": "Stack",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/",
    "solutionUrl": "https://leetcode.com/problems/valid-parentheses/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=valid+parentheses+leetcode"
  },
  {
    "title": "Min Stack",
    "difficulty": "MEDIUM",
    "topic": "Stack",
    "companies": [
      "Amazon",
      "Meta",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/min-stack/",
    "solutionUrl": "https://leetcode.com/problems/min-stack/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=min+stack+leetcode"
  },
  {
    "title": "Evaluate Reverse Polish Notation",
    "difficulty": "MEDIUM",
    "topic": "Stack",
    "companies": [
      "Amazon",
      "LinkedIn"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "solutionUrl": "https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=evaluate+reverse+polish+notation+leetcode"
  },
  {
    "title": "Generate Parentheses",
    "difficulty": "MEDIUM",
    "topic": "Stack",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Uber"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/",
    "solutionUrl": "https://leetcode.com/problems/generate-parentheses/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=generate+parentheses+leetcode"
  },
  {
    "title": "Daily Temperatures",
    "difficulty": "MEDIUM",
    "topic": "Stack",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/",
    "solutionUrl": "https://leetcode.com/problems/daily-temperatures/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=daily+temperatures+leetcode"
  },
  {
    "title": "Car Fleet",
    "difficulty": "MEDIUM",
    "topic": "Stack",
    "companies": [
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/car-fleet/",
    "solutionUrl": "https://leetcode.com/problems/car-fleet/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=car+fleet+leetcode"
  },
  {
    "title": "Largest Rectangle in Histogram",
    "difficulty": "HARD",
    "topic": "Stack",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "solutionUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=largest+rectangle+in+histogram+leetcode"
  },
  {
    "title": "Next Greater Element I",
    "difficulty": "EASY",
    "topic": "Stack",
    "companies": [
      "Amazon",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/",
    "solutionUrl": "https://leetcode.com/problems/next-greater-element-i/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=next+greater+element+leetcode"
  },
  {
    "title": "Binary Search",
    "difficulty": "EASY",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/binary-search/",
    "solutionUrl": "https://leetcode.com/problems/binary-search/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=binary+search+leetcode"
  },
  {
    "title": "Search in Rotated Sorted Array",
    "difficulty": "MEDIUM",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "solutionUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=search+in+rotated+sorted+array+leetcode"
  },
  {
    "title": "Find Minimum in Rotated Sorted Array",
    "difficulty": "MEDIUM",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "solutionUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=find+minimum+in+rotated+sorted+array+leetcode"
  },
  {
    "title": "Search a 2D Matrix",
    "difficulty": "MEDIUM",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/search-a-2d-matrix/",
    "solutionUrl": "https://leetcode.com/problems/search-a-2d-matrix/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=search+a+2d+matrix+leetcode"
  },
  {
    "title": "Koko Eating Bananas",
    "difficulty": "MEDIUM",
    "topic": "Binary Search",
    "companies": [
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/koko-eating-bananas/",
    "solutionUrl": "https://leetcode.com/problems/koko-eating-bananas/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=koko+eating+bananas+leetcode"
  },
  {
    "title": "Time Based Key-Value Store",
    "difficulty": "MEDIUM",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/time-based-key-value-store/",
    "solutionUrl": "https://leetcode.com/problems/time-based-key-value-store/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=time+based+key+value+store+leetcode"
  },
  {
    "title": "Median of Two Sorted Arrays",
    "difficulty": "HARD",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "solutionUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=median+of+two+sorted+arrays+leetcode"
  },
  {
    "title": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "MEDIUM",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "solutionUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=find+first+and+last+position+leetcode"
  },
  {
    "title": "Reverse Linked List",
    "difficulty": "EASY",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "solutionUrl": "https://leetcode.com/problems/reverse-linked-list/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+linked+list+leetcode"
  },
  {
    "title": "Merge Two Sorted Lists",
    "difficulty": "EASY",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "solutionUrl": "https://leetcode.com/problems/merge-two-sorted-lists/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=merge+two+sorted+lists+leetcode"
  },
  {
    "title": "Reorder List",
    "difficulty": "MEDIUM",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/reorder-list/",
    "solutionUrl": "https://leetcode.com/problems/reorder-list/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=reorder+list+leetcode"
  },
  {
    "title": "Remove Nth Node From End of List",
    "difficulty": "MEDIUM",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "solutionUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=remove+nth+node+from+end+of+list+leetcode"
  },
  {
    "title": "Copy List with Random Pointer",
    "difficulty": "MEDIUM",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "solutionUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=copy+list+with+random+pointer+leetcode"
  },
  {
    "title": "Add Two Numbers",
    "difficulty": "MEDIUM",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/add-two-numbers/",
    "solutionUrl": "https://leetcode.com/problems/add-two-numbers/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=add+two+numbers+leetcode"
  },
  {
    "title": "Linked List Cycle",
    "difficulty": "EASY",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "solutionUrl": "https://leetcode.com/problems/linked-list-cycle/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=linked+list+cycle+leetcode"
  },
  {
    "title": "Find the Duplicate Number",
    "difficulty": "MEDIUM",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/find-the-duplicate-number/",
    "solutionUrl": "https://leetcode.com/problems/find-the-duplicate-number/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=find+the+duplicate+number+leetcode"
  },
  {
    "title": "LRU Cache",
    "difficulty": "MEDIUM",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google",
      "Uber"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/lru-cache/",
    "solutionUrl": "https://leetcode.com/problems/lru-cache/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=lru+cache+leetcode"
  },
  {
    "title": "Merge k Sorted Lists",
    "difficulty": "HARD",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "solutionUrl": "https://leetcode.com/problems/merge-k-sorted-lists/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=merge+k+sorted+lists+leetcode"
  },
  {
    "title": "Invert Binary Tree",
    "difficulty": "EASY",
    "topic": "Trees",
    "companies": [
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/invert-binary-tree/",
    "solutionUrl": "https://leetcode.com/problems/invert-binary-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=invert+binary+tree+leetcode"
  },
  {
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "EASY",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "LinkedIn"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "solutionUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=maximum+depth+of+binary+tree+leetcode"
  },
  {
    "title": "Diameter of Binary Tree",
    "difficulty": "EASY",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "solutionUrl": "https://leetcode.com/problems/diameter-of-binary-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=diameter+of+binary+tree+leetcode"
  },
  {
    "title": "Balanced Binary Tree",
    "difficulty": "EASY",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/balanced-binary-tree/",
    "solutionUrl": "https://leetcode.com/problems/balanced-binary-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=balanced+binary+tree+leetcode"
  },
  {
    "title": "Same Tree",
    "difficulty": "EASY",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/same-tree/",
    "solutionUrl": "https://leetcode.com/problems/same-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=same+tree+leetcode"
  },
  {
    "title": "Subtree of Another Tree",
    "difficulty": "EASY",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/subtree-of-another-tree/",
    "solutionUrl": "https://leetcode.com/problems/subtree-of-another-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=subtree+of+another+tree+leetcode"
  },
  {
    "title": "Lowest Common Ancestor of a BST",
    "difficulty": "MEDIUM",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "solutionUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=lowest+common+ancestor+of+a+bst+leetcode"
  },
  {
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "MEDIUM",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "solutionUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=binary+tree+level+order+traversal+leetcode"
  },
  {
    "title": "Binary Tree Right Side View",
    "difficulty": "MEDIUM",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "solutionUrl": "https://leetcode.com/problems/binary-tree-right-side-view/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=binary+tree+right+side+view+leetcode"
  },
  {
    "title": "Count Good Nodes in Binary Tree",
    "difficulty": "MEDIUM",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "solutionUrl": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=count+good+nodes+in+binary+tree+leetcode"
  },
  {
    "title": "Validate Binary Search Tree",
    "difficulty": "MEDIUM",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "solutionUrl": "https://leetcode.com/problems/validate-binary-search-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=validate+binary+search+tree+leetcode"
  },
  {
    "title": "Kth Smallest Element in a BST",
    "difficulty": "MEDIUM",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "solutionUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=kth+smallest+element+in+a+bst+leetcode"
  },
  {
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "MEDIUM",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "solutionUrl": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=construct+binary+tree+from+preorder+and+inorder+leetcode"
  },
  {
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "HARD",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "solutionUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=binary+tree+maximum+path+sum+leetcode"
  },
  {
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "HARD",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "solutionUrl": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=serialize+and+deserialize+binary+tree+leetcode"
  },
  {
    "title": "Implement Trie (Prefix Tree)",
    "difficulty": "MEDIUM",
    "topic": "Tries",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "solutionUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=implement+trie+leetcode"
  },
  {
    "title": "Design Add and Search Words Data Structure",
    "difficulty": "MEDIUM",
    "topic": "Tries",
    "companies": [
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "solutionUrl": "https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+add+and+search+words+data+structure+leetcode"
  },
  {
    "title": "Word Search II",
    "difficulty": "HARD",
    "topic": "Tries",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/word-search-ii/",
    "solutionUrl": "https://leetcode.com/problems/word-search-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=word+search+ii+leetcode"
  },
  {
    "title": "Longest Word in Dictionary",
    "difficulty": "MEDIUM",
    "topic": "Tries",
    "companies": [
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-word-in-dictionary/",
    "solutionUrl": "https://leetcode.com/problems/longest-word-in-dictionary/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=longest+word+in+dictionary+leetcode"
  },
  {
    "title": "Replace Words",
    "difficulty": "MEDIUM",
    "topic": "Tries",
    "companies": [
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/replace-words/",
    "solutionUrl": "https://leetcode.com/problems/replace-words/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=replace+words+leetcode"
  },
  {
    "title": "Kth Largest Element in a Stream",
    "difficulty": "EASY",
    "topic": "Heap",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "solutionUrl": "https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=kth+largest+element+in+a+stream+leetcode"
  },
  {
    "title": "Last Stone Weight",
    "difficulty": "EASY",
    "topic": "Heap",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/last-stone-weight/",
    "solutionUrl": "https://leetcode.com/problems/last-stone-weight/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=last+stone+weight+leetcode"
  },
  {
    "title": "K Closest Points to Origin",
    "difficulty": "MEDIUM",
    "topic": "Heap",
    "companies": [
      "Amazon",
      "Facebook",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "solutionUrl": "https://leetcode.com/problems/k-closest-points-to-origin/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=k+closest+points+to+origin+leetcode"
  },
  {
    "title": "Kth Largest Element in an Array",
    "difficulty": "MEDIUM",
    "topic": "Heap",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "solutionUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=kth+largest+element+in+an+array+leetcode"
  },
  {
    "title": "Task Scheduler",
    "difficulty": "MEDIUM",
    "topic": "Heap",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/task-scheduler/",
    "solutionUrl": "https://leetcode.com/problems/task-scheduler/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=task+scheduler+leetcode"
  },
  {
    "title": "Design Twitter",
    "difficulty": "MEDIUM",
    "topic": "Heap",
    "companies": [
      "Twitter",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/design-twitter/",
    "solutionUrl": "https://leetcode.com/problems/design-twitter/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+twitter+leetcode"
  },
  {
    "title": "Find Median from Data Stream",
    "difficulty": "HARD",
    "topic": "Heap",
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "solutionUrl": "https://leetcode.com/problems/find-median-from-data-stream/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=find+median+from+data+stream+leetcode"
  },
  {
    "title": "Reorganize String",
    "difficulty": "MEDIUM",
    "topic": "Heap",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/reorganize-string/",
    "solutionUrl": "https://leetcode.com/problems/reorganize-string/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=reorganize+string+leetcode"
  },
  {
    "title": "Subsets",
    "difficulty": "MEDIUM",
    "topic": "Backtracking",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/subsets/",
    "solutionUrl": "https://leetcode.com/problems/subsets/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=subsets+leetcode"
  },
  {
    "title": "Combination Sum",
    "difficulty": "MEDIUM",
    "topic": "Backtracking",
    "companies": [
      "Amazon",
      "Uber",
      "Snapchat"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
    "solutionUrl": "https://leetcode.com/problems/combination-sum/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=combination+sum+leetcode"
  },
  {
    "title": "Permutations",
    "difficulty": "MEDIUM",
    "topic": "Backtracking",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/permutations/",
    "solutionUrl": "https://leetcode.com/problems/permutations/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=permutations+leetcode"
  },
  {
    "title": "Subsets II",
    "difficulty": "MEDIUM",
    "topic": "Backtracking",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
    "solutionUrl": "https://leetcode.com/problems/subsets-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=subsets+ii+leetcode"
  },
  {
    "title": "Combination Sum II",
    "difficulty": "MEDIUM",
    "topic": "Backtracking",
    "companies": [
      "Amazon",
      "Uber"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "solutionUrl": "https://leetcode.com/problems/combination-sum-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=combination+sum+ii+leetcode"
  },
  {
    "title": "Word Search",
    "difficulty": "MEDIUM",
    "topic": "Backtracking",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "solutionUrl": "https://leetcode.com/problems/word-search/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=word+search+leetcode"
  },
  {
    "title": "Palindrome Partitioning",
    "difficulty": "MEDIUM",
    "topic": "Backtracking",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
    "solutionUrl": "https://leetcode.com/problems/palindrome-partitioning/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=palindrome+partitioning+leetcode"
  },
  {
    "title": "N-Queens",
    "difficulty": "HARD",
    "topic": "Backtracking",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/n-queens/",
    "solutionUrl": "https://leetcode.com/problems/n-queens/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=n+queens+leetcode"
  },
  {
    "title": "Number of Islands",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
    "solutionUrl": "https://leetcode.com/problems/number-of-islands/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=number+of+islands+leetcode"
  },
  {
    "title": "Clone Graph",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/clone-graph/",
    "solutionUrl": "https://leetcode.com/problems/clone-graph/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=clone+graph+leetcode"
  },
  {
    "title": "Max Area of Island",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/max-area-of-island/",
    "solutionUrl": "https://leetcode.com/problems/max-area-of-island/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=max+area+of+island+leetcode"
  },
  {
    "title": "Pacific Atlantic Water Flow",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "solutionUrl": "https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=pacific+atlantic+water+flow+leetcode"
  },
  {
    "title": "Surrounded Regions",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/",
    "solutionUrl": "https://leetcode.com/problems/surrounded-regions/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=surrounded+regions+leetcode"
  },
  {
    "title": "Rotting Oranges",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/",
    "solutionUrl": "https://leetcode.com/problems/rotting-oranges/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=rotting+oranges+leetcode"
  },
  {
    "title": "Walls and Gates",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/walls-and-gates/",
    "solutionUrl": "https://leetcode.com/problems/walls-and-gates/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=walls+and+gates+leetcode"
  },
  {
    "title": "Course Schedule",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/course-schedule/",
    "solutionUrl": "https://leetcode.com/problems/course-schedule/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=course+schedule+leetcode"
  },
  {
    "title": "Course Schedule II",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/",
    "solutionUrl": "https://leetcode.com/problems/course-schedule-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=course+schedule+ii+leetcode"
  },
  {
    "title": "Redundant Connection",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/redundant-connection/",
    "solutionUrl": "https://leetcode.com/problems/redundant-connection/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=redundant+connection+leetcode"
  },
  {
    "title": "Number of Connected Components in an Undirected Graph",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "solutionUrl": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=number+of+connected+components+leetcode"
  },
  {
    "title": "Graph Valid Tree",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/graph-valid-tree/",
    "solutionUrl": "https://leetcode.com/problems/graph-valid-tree/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=graph+valid+tree+leetcode"
  },
  {
    "title": "Word Ladder",
    "difficulty": "HARD",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/word-ladder/",
    "solutionUrl": "https://leetcode.com/problems/word-ladder/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=word+ladder+leetcode"
  },
  {
    "title": "Alien Dictionary",
    "difficulty": "HARD",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Airbnb"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/",
    "solutionUrl": "https://leetcode.com/problems/alien-dictionary/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=alien+dictionary+leetcode"
  },
  {
    "title": "Network Delay Time",
    "difficulty": "MEDIUM",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/",
    "solutionUrl": "https://leetcode.com/problems/network-delay-time/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=network+delay+time+leetcode+dijkstra"
  },
  {
    "title": "Climbing Stairs",
    "difficulty": "EASY",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Adobe",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
    "solutionUrl": "https://leetcode.com/problems/climbing-stairs/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=climbing+stairs+leetcode"
  },
  {
    "title": "House Robber",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Google",
      "Adobe"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/house-robber/",
    "solutionUrl": "https://leetcode.com/problems/house-robber/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=house+robber+leetcode"
  },
  {
    "title": "House Robber II",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/house-robber-ii/",
    "solutionUrl": "https://leetcode.com/problems/house-robber-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=house+robber+ii+leetcode"
  },
  {
    "title": "Longest Palindromic Substring",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-substring/",
    "solutionUrl": "https://leetcode.com/problems/longest-palindromic-substring/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=longest+palindromic+substring+leetcode"
  },
  {
    "title": "Palindromic Substrings",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/palindromic-substrings/",
    "solutionUrl": "https://leetcode.com/problems/palindromic-substrings/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=palindromic+substrings+leetcode"
  },
  {
    "title": "Decode Ways",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/decode-ways/",
    "solutionUrl": "https://leetcode.com/problems/decode-ways/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=decode+ways+leetcode"
  },
  {
    "title": "Coin Change",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/coin-change/",
    "solutionUrl": "https://leetcode.com/problems/coin-change/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=coin+change+leetcode"
  },
  {
    "title": "Maximum Product Subarray",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "LinkedIn"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/",
    "solutionUrl": "https://leetcode.com/problems/maximum-product-subarray/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=maximum+product+subarray+leetcode"
  },
  {
    "title": "Word Break",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Uber"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/word-break/",
    "solutionUrl": "https://leetcode.com/problems/word-break/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=word+break+leetcode"
  },
  {
    "title": "Longest Increasing Subsequence",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "solutionUrl": "https://leetcode.com/problems/longest-increasing-subsequence/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=longest+increasing+subsequence+leetcode"
  },
  {
    "title": "Partition Equal Subset Sum",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "solutionUrl": "https://leetcode.com/problems/partition-equal-subset-sum/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=partition+equal+subset+sum+leetcode"
  },
  {
    "title": "Unique Paths",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Snapchat"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
    "solutionUrl": "https://leetcode.com/problems/unique-paths/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=unique+paths+leetcode"
  },
  {
    "title": "Longest Common Subsequence",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "solutionUrl": "https://leetcode.com/problems/longest-common-subsequence/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=longest+common+subsequence+leetcode"
  },
  {
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    "solutionUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=best+time+to+buy+and+sell+stock+with+cooldown+leetcode"
  },
  {
    "title": "Coin Change II",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/coin-change-ii/",
    "solutionUrl": "https://leetcode.com/problems/coin-change-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=coin+change+ii+leetcode"
  },
  {
    "title": "Target Sum",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/target-sum/",
    "solutionUrl": "https://leetcode.com/problems/target-sum/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=target+sum+leetcode"
  },
  {
    "title": "Interleaving String",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/interleaving-string/",
    "solutionUrl": "https://leetcode.com/problems/interleaving-string/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=interleaving+string+leetcode"
  },
  {
    "title": "Edit Distance",
    "difficulty": "MEDIUM",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
    "solutionUrl": "https://leetcode.com/problems/edit-distance/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=edit+distance+leetcode"
  },
  {
    "title": "Burst Balloons",
    "difficulty": "HARD",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/burst-balloons/",
    "solutionUrl": "https://leetcode.com/problems/burst-balloons/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=burst+balloons+leetcode"
  },
  {
    "title": "Regular Expression Matching",
    "difficulty": "HARD",
    "topic": "DP",
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Uber"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/regular-expression-matching/",
    "solutionUrl": "https://leetcode.com/problems/regular-expression-matching/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=regular+expression+matching+leetcode"
  },
  {
    "title": "Maximum Subarray",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "LinkedIn"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
    "solutionUrl": "https://leetcode.com/problems/maximum-subarray/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=maximum+subarray+leetcode+kadane"
  },
  {
    "title": "Jump Game",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/jump-game/",
    "solutionUrl": "https://leetcode.com/problems/jump-game/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=jump+game+leetcode"
  },
  {
    "title": "Jump Game II",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/jump-game-ii/",
    "solutionUrl": "https://leetcode.com/problems/jump-game-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=jump+game+ii+leetcode"
  },
  {
    "title": "Gas Station",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/gas-station/",
    "solutionUrl": "https://leetcode.com/problems/gas-station/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=gas+station+leetcode"
  },
  {
    "title": "Hand of Straights",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/hand-of-straights/",
    "solutionUrl": "https://leetcode.com/problems/hand-of-straights/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=hand+of+straights+leetcode"
  },
  {
    "title": "Merge Triplets to Form Target Triplet",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    "solutionUrl": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=merge+triplets+to+form+target+triplet+leetcode"
  },
  {
    "title": "Partition Labels",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/partition-labels/",
    "solutionUrl": "https://leetcode.com/problems/partition-labels/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=partition+labels+leetcode"
  },
  {
    "title": "Valid Parenthesis String",
    "difficulty": "MEDIUM",
    "topic": "Greedy",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-parenthesis-string/",
    "solutionUrl": "https://leetcode.com/problems/valid-parenthesis-string/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=valid+parenthesis+string+leetcode"
  },
  {
    "title": "Insert Interval",
    "difficulty": "MEDIUM",
    "topic": "Intervals",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/insert-interval/",
    "solutionUrl": "https://leetcode.com/problems/insert-interval/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=insert+interval+leetcode"
  },
  {
    "title": "Merge Intervals",
    "difficulty": "MEDIUM",
    "topic": "Intervals",
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/",
    "solutionUrl": "https://leetcode.com/problems/merge-intervals/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=merge+intervals+leetcode"
  },
  {
    "title": "Non-overlapping Intervals",
    "difficulty": "MEDIUM",
    "topic": "Intervals",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
    "solutionUrl": "https://leetcode.com/problems/non-overlapping-intervals/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=non+overlapping+intervals+leetcode"
  },
  {
    "title": "Meeting Rooms",
    "difficulty": "EASY",
    "topic": "Intervals",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms/",
    "solutionUrl": "https://leetcode.com/problems/meeting-rooms/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=meeting+rooms+leetcode"
  },
  {
    "title": "Meeting Rooms II",
    "difficulty": "MEDIUM",
    "topic": "Intervals",
    "companies": [
      "Meta",
      "Google",
      "Amazon",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/",
    "solutionUrl": "https://leetcode.com/problems/meeting-rooms-ii/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=meeting+rooms+ii+leetcode"
  },
  {
    "title": "Minimum Interval to Include Each Query",
    "difficulty": "HARD",
    "topic": "Intervals",
    "companies": [
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    "solutionUrl": "https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=minimum+interval+to+include+each+query+leetcode"
  },
  {
    "title": "Single Number",
    "difficulty": "EASY",
    "topic": "Bit Manipulation",
    "companies": [
      "Amazon",
      "Palantir"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/single-number/",
    "solutionUrl": "https://leetcode.com/problems/single-number/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=single+number+leetcode"
  },
  {
    "title": "Number of 1 Bits",
    "difficulty": "EASY",
    "topic": "Bit Manipulation",
    "companies": [
      "Amazon",
      "Apple",
      "Microsoft"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "solutionUrl": "https://leetcode.com/problems/number-of-1-bits/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=number+of+1+bits+leetcode"
  },
  {
    "title": "Counting Bits",
    "difficulty": "EASY",
    "topic": "Bit Manipulation",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/counting-bits/",
    "solutionUrl": "https://leetcode.com/problems/counting-bits/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=counting+bits+leetcode"
  },
  {
    "title": "Reverse Bits",
    "difficulty": "EASY",
    "topic": "Bit Manipulation",
    "companies": [
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/reverse-bits/",
    "solutionUrl": "https://leetcode.com/problems/reverse-bits/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+bits+leetcode"
  },
  {
    "title": "Missing Number",
    "difficulty": "EASY",
    "topic": "Bit Manipulation",
    "companies": [
      "Amazon",
      "Adobe"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/missing-number/",
    "solutionUrl": "https://leetcode.com/problems/missing-number/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=missing+number+leetcode"
  },
  {
    "title": "Sum of Two Integers",
    "difficulty": "MEDIUM",
    "topic": "Bit Manipulation",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/sum-of-two-integers/",
    "solutionUrl": "https://leetcode.com/problems/sum-of-two-integers/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=sum+of+two+integers+leetcode"
  },
  {
    "title": "Reverse Integer",
    "difficulty": "MEDIUM",
    "topic": "Math",
    "companies": [
      "Amazon",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/reverse-integer/",
    "solutionUrl": "https://leetcode.com/problems/reverse-integer/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+integer+leetcode"
  },
  {
    "title": "Pow(x, n)",
    "difficulty": "MEDIUM",
    "topic": "Math",
    "companies": [
      "Amazon",
      "LinkedIn"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/powx-n/",
    "solutionUrl": "https://leetcode.com/problems/powx-n/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=pow+x+n+leetcode"
  },
  {
    "title": "Design HashMap",
    "difficulty": "EASY",
    "topic": "Design",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/design-hashmap/",
    "solutionUrl": "https://leetcode.com/problems/design-hashmap/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+hashmap+leetcode"
  },
  {
    "title": "Design Circular Queue",
    "difficulty": "MEDIUM",
    "topic": "Design",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/design-circular-queue/",
    "solutionUrl": "https://leetcode.com/problems/design-circular-queue/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+circular+queue+leetcode"
  },
  {
    "title": "Insert Delete GetRandom O(1)",
    "difficulty": "MEDIUM",
    "topic": "Design",
    "companies": [
      "Amazon",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/insert-delete-getrandom-o1/",
    "solutionUrl": "https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=insert+delete+getrandom+o1+leetcode"
  },
  {
    "title": "Design a Stack With Increment Operation",
    "difficulty": "MEDIUM",
    "topic": "Design",
    "companies": [
      "Amazon"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/design-a-stack-with-increment-operation/",
    "solutionUrl": "https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+a+stack+with+increment+operation+leetcode"
  },
  {
    "title": "Design Underground System",
    "difficulty": "MEDIUM",
    "topic": "Design",
    "companies": [
      "Amazon",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/design-underground-system/",
    "solutionUrl": "https://leetcode.com/problems/design-underground-system/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+underground+system+leetcode"
  },
  {
    "title": "LFU Cache",
    "difficulty": "HARD",
    "topic": "Design",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/lfu-cache/",
    "solutionUrl": "https://leetcode.com/problems/lfu-cache/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=lfu+cache+leetcode"
  }
];
