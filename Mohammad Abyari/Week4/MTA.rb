
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# console.log() shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

require 'pry'
require 'colorize'

def mta_greeting

  puts 'MTA'.center(100)
  puts '<><><><><>'* 7 + ' Line N ' +'<><><><><>'* 7
  puts linen = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
  puts '<><><><><>'* 7 + ' Line L ' +'<><><><><>'* 7
  puts linel = ['8th', '6th', 'Union Square', '3rd', '1st']
  puts '<><><><><>'* 7 + ' Line 6 ' +'<><><><><>'* 7
  puts line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  puts '<><><><>'* 19


end

mta_greeting

trainLines = {
  "N" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

print 'Enter your startline: '
startLine = gets.chomp.capitalize

print 'Enter your startStation: '
startStation = gets.chomp.split.map(&:capitalize).join(' ')

print 'Enter your stopLine: '
stopLine = gets.chomp.capitalize

print 'Enter your stopStation: '
stopStation = gets.chomp.split.map(&:capitalize).join(' ')

route = [startLine,startStation,stopLine,stopStation]

puts "This is your route journey: + #{route} "


if route[0] == route[2]
  startpoint= trainLines[startLine].find_index(startStation)
  stoppoint = trainLines[startLine].find_index(stopStation)
  number_of_stops = (startpoint - stoppoint).abs
  journey = trainLines[startLine][startpoint..stoppoint]
  puts " #{number_of_stops} stops in total."
  journey.shift
  puts journey.join(' ')

else

  startpoint= trainLines[startLine].find_index(startStation)
  unionsquare1 = trainLines[startLine].find_index('Union Square')
  numberofstop1 = (startpoint - unionsquare1).abs
  stoppoint = trainLines[stopLine].find_index(stopStation)
  unionsquare2 = trainLines[stopLine].find_index('Union Square')
  numberofstop2 = (unionsquare2 - stoppoint).abs
  number_of_stops =(numberofstop1 + numberofstop2).abs

  puts " #{number_of_stops} stops in total."

  journey = (trainLines[startLine][startpoint..unionsquare1]) + (trainLines[stopLine][unionsquare2..stoppoint])
  journey.shift
  puts journey.join(' ')


end

binding.pry
