print "Your weight in kg: "
wt_in_kg = gets.to_f
print "Your height in cm: "
ht_in_cm = gets.to_f

def calc_bmi(w, h)
  bmi = ((w/ h**2) * 10_000).round(2)
end

bmi_idx = calc_bmi(wt_in_kg, ht_in_cm)
bmi_info = case
when bmi_idx < 18 then "You are underweight."
when bmi_idx > 25 then "You are overweight."
else "Your weight is within the normal range."
end

puts "Your BMI is (#{bmi_idx}). " + bmi_info
