# # Mini-Max Sum
# Write a function that accepts an array of five integers and calculate and print out the minimum and maximum values that can be calculated by summing exactly four of the five integers.
# For example:
# ```ruby
# minimax_sum [1, 9, 5, 3, 7]
# # expected output: min_sum: 16; max_sum: 24
# ```
# ## Bonus
# The function can accept two arguments: an array contain any numbers of integers; and an integer that indicates how many numbers of the array to calculate minimum and maximum value from.
# For example:
# ```ruby
# minimax_sum [1, 9, 5, 3, 7, 11], 3
# # expected output: min_sum: 9; max_sum: 27
# # because min_sum = 1 + 3 + 5; max_sum = 7 + 9 + 11
# ```

# declare the function
def minimax_sum arr
  # sort the array
  p sorted_arr = arr.sort
  # count sum of the first 4 elements of the array -> min_sum
  min_sum = sorted_arr.take(4).inject(&:+)
  # count sum of the last 4 elements of the array -> max_sum
  max_sum = sorted_arr.drop(1).inject(&:+)

  puts "min_sum: #{min_sum}; max_sum: #{max_sum}"
end

minimax_sum [100, 9, 5, 3, 7]

### BONUS

# def minimax_sum arr, num
#   p sorted_arr = arr.sort

#   # count sum of the first `num` elements of the array -> min_sum
#   p min_sum = sorted_arr.take(num).inject(&:+);
#   # count sum of the last `num` elements of the array -> max_sum
#   p max_sum = sorted_arr.drop(arr.size - num).inject(&:+);

#   puts "min_sum: #{min_sum}; max_sum: #{max_sum}"
# end

# minimax_sum [1, 9, 5, 3, 7], 2
# minimax_sum [1, 9, 5, 3, 7, 11], 3