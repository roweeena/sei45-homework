# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)

def show_menue
  puts "Calculator".center(170)
  puts "%\\//" * 89
  puts "[+] Addition"
  puts "[-] Subtraction"
  puts "[*] Multiplication"
  puts "[/] Division"
  puts "[^] Exponent"
  puts "[sqrt] Square roots"
  puts "[q] Quit"
  puts "Enter your choice: "
end

show_menue # call the function

menue_choice = gets[0].downcase

until menue_choice == 'q'

  case menue_choice
  when '+'
    puts "You chose Addition"
    print "Enter your first number: "
    num1 = gets.to_i
    print "Enter your second number: "
    num2 = gets.to_i
    puts "The addition of #{num1} and #{num2} is #{num1 + num2}."
  when '-'
    puts "You chose Subtraction"
    print "Enter your first number: "
    num1 = gets.to_i
    print "Enter your second number: "
    num2 = gets.to_i
    puts "The subtraction of #{num2} from #{num1} is #{num1 - num2}."
  when '*'
    puts "You chose Multiplication"
    print "Enter your first number: "
    num1 = gets.to_i
    print "Enter your second number: "
    num2 = gets.to_i
    puts "The multiplication of #{num1} by #{num2} is #{num1 * num2}."
  when '/'
    puts "You chose Division"
    print "Enter your first number: "
    num1 = gets.to_i
    print "Enter your second number: "
    num2 = gets.to_i
    puts "The division of #{num1} by #{num2} is #{num1 / num2}."
  when '^'
    puts "You chose Exponent"
    print "Enter your base number: "
    num1 = gets.to_i
    print "Enter number you want to power the base by: "
    num2 = gets.to_i
    puts "#{num1} powered by #{num2} is #{num1 ** num2}."
  when 'sqrt'
    puts "You chose Square roots"
    print "Enter your number: "
    num1 = gets.to_i
    puts "The square root of #{num1} is #{Math.sqrt(num1)}."
  else
    puts "Invalid selection."
  end

  show_menue
  menue_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."
