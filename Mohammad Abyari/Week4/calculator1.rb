def cal_menu
  puts 'Calculator'.center(100)
  puts '<><><><><>'* 10
  puts "[A] - Addition"
  puts "[S] - Subtraction"
  puts "[M] - Multiplication"
  puts "[D] - Division"
  puts "[P] - Percentage"
  puts "[Q] - Quit"
  print 'Enter your choice: '
end

cal_menu
menu_choice = gets.chomp.upcase

until menu_choice == 'Q'
  puts "Your choice is #{menu_choice}"


 case menu_choice
  when 'A'
    print 'Please enter your first number: '
      num1=gets.chomp.to_f
    print 'Please enter your second number: '
      num2=gets.chomp.to_f
    result = num1+num2
      require 'colorize'
    puts "The addition of #{num1} and #{num2} is #{result}".red

  when 'S'
    print 'Please enter your first number: '
      num1=gets.chomp.to_f
    print 'Please enter your second number: '
      num2=gets.chomp.to_f
      result = num1-num2
      require 'colorize'
    puts "The subtraction of #{num1} and #{num2} is #{result}".red

  when 'M'
    print 'Please enter your first number: '
      num1=gets.chomp.to_f
    print 'Please enter your second number: '
      num2=gets.chomp.to_f
      result = num1 * num2
      require 'colorize'
    puts "The multiplication of #{num1} and #{num2} is #{result}".red

  when 'D'
    print 'Please enter your first number: '
      num1=gets.chomp.to_f
    print 'Please enter your second number: '
      num2=gets.chomp.to_f
      result = num1 / num2
      require 'colorize'
    puts "The Division of #{num1} and #{num2} is #{result}".red

  when 'P'
    print 'Please enter your first number: '
      num1=gets.chomp.to_f
    print 'Please enter your second number: '
      num2=gets.chomp.to_f
      result = (num1 / num2) * 100
      require 'colorize'
    puts "#{num1} is #{result}% of #{num2}".red

  end

  cal_menu
  menu_choice = gets.chomp.upcase


end

puts "Thanks for using my calculator"
