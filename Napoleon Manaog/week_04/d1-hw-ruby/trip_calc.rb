
print "Distance of your trip in miles? "
dist = gets.to_i
print "Miles per gallon? "
mpg = gets.to_f
print "Price per gallon? "
ppg = gets.to_f
print "Speed in miles per hour? "
mph = gets.to_f

def calc_trip_time(dist, spd)
  time = (dist/spd).round(1)
end

def calc_trip_cost(price_per_gallon, miles_per_gallon, distance)
  cost = (price_per_gallon * distance/ miles_per_gallon).round(1)
end

needed_time = calc_trip_time(dist, mph)

hour = 'hour'
if needed_time > 1.0
  hour = 'hours'
end

puts "Your trip will take #{calc_trip_time(dist, mph)} #{hour} and will cost around #{calc_trip_cost(ppg, mpg, dist)}."
