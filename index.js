// You are given an integer mass, which represents the original mass of a planet. You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.

// You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.

// Return true if all asteroids can be destroyed. Otherwise, return false.

// Example 1:

// Input: mass = 10, asteroids = [3,9,19,5,21]
// Output: true
// Explanation: One way to order the asteroids is [9,19,5,3,21]:
// - The planet collides with the asteroid with a mass of 9. New planet mass: 10 + 9 = 19
// - The planet collides with the asteroid with a mass of 19. New planet mass: 19 + 19 = 38
// - The planet collides with the asteroid with a mass of 5. New planet mass: 38 + 5 = 43
// - The planet collides with the asteroid with a mass of 3. New planet mass: 43 + 3 = 46
// - The planet collides with the asteroid with a mass of 21. New planet mass: 46 + 21 = 67
// All asteroids are destroyed.

// https://leetcode.com/problems/destroying-asteroids/

function asteroidsDestroyed(mass, asteroids) {
    const orderedAsteroids = asteroids.sort((a, b) => a - b)
    for (asteroid of orderedAsteroids) {
        if (mass < asteroid) return false
        mass += asteroid
    }
    return true
}

// You are given an integer array nums and an integer k. You may partition nums into one or more subsequences such that each element in nums appears in exactly one of the subsequences.

// Return the minimum number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is at most k.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [3,6,1,2,5], k = 2
// Output: 2
// Explanation:
// We can partition nums into the two subsequences [3,1,2] and [6,5].
// The difference between the maximum and minimum value in the first subsequence is 3 - 1 = 2.
// The difference between the maximum and minimum value in the second subsequence is 6 - 5 = 1.
// Since two subsequences were created, we return 2. It can be shown that 2 is the minimum number of subsequences needed.

// https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/

function partitionArray(nums, k) {
    const orderedNums = nums.sort((a, b) => a - b)
    let ans = 1
    let num = orderedNums[0]

    for (let i = 1; i < nums.length; i++) {
        if (orderedNums[i] - num > k) {
            ans++
            num = orderedNums[i]
        }
    }

    return ans
}

// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/

// from collections import Counter

// JS:

const findLeastNumOfUniqueInts = (arr, k) => {
    const counter = new Map()

    for (num of arr) {
        counter.set(num, (counter.get(num) || 0) + 1)
    }

    arr = arr.sort((a, b) => counter.get(b) - counter.get(a) || b - a)

    for (let i = 0; i < k; i++) arr.pop()

    return Array.from(new Set(arr)).length
};

// PYTHON

// class Solution:
//     def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
//         heap = []
//         counter = Counter(arr)
//         for key, val in counter.items():
//             heapq.heappush(heap, (val, key))

//         for _ in range(k):
//             if counter[heap[0][1]] == 1:
//                 heapq.heappop(heap)
//             else:
//                 counter[heap[0][1]] -= 1

//         return len(heap)

// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)

// https://leetcode.com/problems/boats-to-save-people/

const numRescueBoats = (people, limit) => {
    const orderedPeople = people.sort((a, b) => a - b)
    let left = 0
    let right = orderedPeople.length - 1
    let boats = 0

    while (left <= right) {
        if (left === right) {
            return boats + 1
        }

        if (orderedPeople[left] + orderedPeople[right] <= limit) {
            left++
        }

        boats++
        right--

    }

    return boats
};