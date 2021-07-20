require 'prime'
 
def factors m
  return [1] if 1==m
  primes, powers = Prime.prime_division(m).transpose
  ranges = powers.map{|n| (0..n).to_a}
  ranges[0].product( *ranges[1..-1] ).
  map{|es| primes.zip(es).map{|p,e| p**e}.reduce :*}.
  sort
end
 


#Exercises:

def exit_script
    exit
end

def dna
    puts ""
    puts "______________________"
    puts "\u{1F9EC}"
    puts "Counting nucleotides"
    puts ""

    nucs = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

    nucObj = {
        'a' => 0,
    }

    puts ""
    puts "That was fun. Play again? [Y/N]" 
    if gets.chomp.upcase == "Y"
        raindrops
    end

end

def raindrops
    puts ""
    puts "______________________"
    puts "\u{1F327}"
    puts "Enter a number, and you'll get a sound back, depending on some maths or something"
    puts ""

    number = (gets.chomp.to_i)
    factors_arr = factors(number)

    puts "Pling" if factors_arr.include? 3
    puts "Plang" if factors_arr.include? 5
    puts "Plong" if factors_arr.include? 7
    puts number if !factors_arr.include? 3 || 5 || 7

    puts ""
    puts "That was fun. Play again? [Y/N]" 
    if gets.chomp.upcase == "Y"
        raindrops
    end

end


def guess_number
    puts "______________________"
    puts " "
    puts "I'm thinking of a number between 1-10, guess what it is:"
    puts " "
    answer = rand(1..10)
    
    if gets.chomp.to_i == answer
        puts "Correct! Play again? [Y/N]" 
    else puts "Not this time. Play again? [Y/N]"
    end
    if gets.chomp.upcase == "Y"
        guess_number
    end
end

exercises = [
    "[0] X Exit",
    "[1] \u{1F327} Raindrops",
    "[2] \u{1F914} Guess Number",
    "[3] \u{1F9EC} DNA",

]

exercise_functions = [
    method(:exit_script),
    method(:raindrops),
    method(:guess_number), 
    method(:dna)
]

def intro(exercises,  exercise_functions)
    puts " "
    print "\u{1F44B} Hello\nWhich exercise would you like to see? Type a number below:\n"
    puts " "
    puts exercises.join("  ")
    answer = (gets.chomp.to_i)
    until answer.class == Integer && answer < exercise_functions.length
        puts " "
        puts "Invalid choice, choose again"
        answer = (gets.chomp.to_i)
    end
    exercise_functions[answer].call
    intro(exercises,  exercise_functions)

end



intro(exercises,  exercise_functions)



