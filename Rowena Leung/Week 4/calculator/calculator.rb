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
def show_menu
  puts "Calculator" #todo: use .center to make it look nicer
  puts "=-" * 40 # budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[r] - Square Root"
  puts "[e] - Exponent"
  puts "[mo] - Mortgage"
  puts "[bm] - BMI"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
  when 'a'
    puts "You chose addition!"
    print "Which numbers would you like to add?"
    a = gets.chomp.to_i
    b = gets.chomp.to_i
    answer = a + b


  when 's'
    puts "You chose subtraction!"
    print "Which numbers would you like to substract?"

    num1 = gets.chomp.to_i
    num2 = gets.chomp.to_i
    answer = num1 - num2


  when 'd'
    puts "You chose division!"
    print "Which numbers would you like to divide?"
    num1 = gets.chomp.to_i
    num2 = gets.chomp.to_i
    answer = num1 / num2



  when 'm'
    puts "You chose multiplication!"
    print "Which numbers would you like to multiply?"
    num1 = gets.chomp.to_i
    num2 = gets.chomp.to_i
    answer = num1 * num2


  when 'r'
    puts "You chose square root!"
    print "Enter a number to find its square root"
    num1 = gets.chomp.to_i
    answer = Math.sqrt(num1)


  when 'e'
    puts "You chose exponent!"
    print "Which numbers would you like to find the power of"
    num1 = gets.chomp.to_i
    num2 = gets.chomp.to_i
    answer = num1 ** num2

  when 'mo'
    puts "You chose mortgage!"
    print "What is your principal amount?"
    p = gets.chomp.to_f
    print "What is the monthly interest rate? "
    int_rate = gets.to_f
    print "How long will it take for you to repay your loan in months?"
    time = gets.to_f
    answer = p * (int_rate * (1 + int_rate) ** time )  / (((1 + int_rate) ** (time)) - 1)

  when 'bm'
    puts "You chose BMI!" # formula is kg/m^2
    puts "To calculate your BMI, first enter your height in centimetres"
      num1 = gets.chomp.to_f / 100
    puts "Now enter your weight in kg"

    num2 = gets.chomp.to_f
    answer = num2 / (num1 * num1)

  else
    puts "That's an invalid selection. "
end
 puts "The answer is #{answer}"
  show_menu
  menu_choice = gets.chomp.downcase
end
puts "Thanks for using this calculator"
