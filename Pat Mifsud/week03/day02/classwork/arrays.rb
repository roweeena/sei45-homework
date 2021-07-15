
days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

days_of_the_week.rotate! -1
puts days_of_the_week


a = ["Anil", "Erik", "Jonathan"]
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

#1. How would you return the string `"Erik"`?
puts a[1]

#2. How would you add your name to the array?
a.push("Pat")
puts a

#3. How would you return the string `"One"`?
puts h[0]
puts h.first

#4. How would you return the string `"Two"`?
puts h[1]


#5. How would you return the number `2`?
puts h[1].to_i

#6. How would you add `{3 => "Three"}` to the hash?
h[3] = "Three"

#7. How would you add `{:four => 4}` to the hash?
h[:four] = 4
puts h



users = {
    "Jonathan" => {
      :twitter => "tronathan",
      :favorite_numbers => [12, 42, 75],
    },
    "Erik" => {
      :twitter => "sferik",
      :favorite_numbers => [8, 12, 24],
    },
    "Anil" => {
      :twitter => "bridgpal",
      :favorite_numbers => [12, 14, 85],
    },
}

# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
puts users["Jonathan"][:twitter]

# 1. How would you add the number `7` to Erik's favorite numbers?
puts users["Erik"][:favorite_numbers].push(7)

# 1. How would you add yourself to the users hash?
users["Pat"] = {:twitter => "patmifsud", :favorite_numbers => [0, 12, 95, 2000]}

# 1. How would you return the array of Erik's favorite numbers?
puts users["Erik"][:favorite_numbers]

# 1. How would you return the smallest of Erik's favorite numbers?
puts users["Erik"][:favorite_numbers].sort[0]

# 1. How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].each { |x| puts x if x.even? }


# 1. How would you return an array of the favorite numbers common to all users?
#????

# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
users.each{ |x| puts x[:favorite_numbers]}

