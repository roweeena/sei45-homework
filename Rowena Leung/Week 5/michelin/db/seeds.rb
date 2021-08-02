# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Chef.destroy_all

Chef.create(:name => 'Gordan Ramsay', :nationality => 'British', :michelin => 7, :image => 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_766/https://trulyexperiences.com/blog/wp-content/uploads/2018/04/5034956030_78d7847da0_o-e1614080434624.jpg')
Chef.create(:name => 'Heston Blumenthal', :nationality => 'British', :michelin => 6, :image => 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1500/https://trulyexperiences.com/blog/wp-content/uploads/2018/04/16878704832_5e4359cfbd_h.jpg')
Chef.create(:name => 'Anne-Sophie Pic', :nationality => 'French', :michelin => 8, :image => 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_842/https://trulyexperiences.com/blog/wp-content/uploads/2018/04/Anne-Sophie_Pic_par_Claude_Truong-Ngoc_mars_2014-842x1263.jpg')
Chef.create(:name => 'Seiji Yamamoto', :nationality => 'Japanese', :michelin => 7, :image => 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/im_landscape_100/public/Original_17858_Seiji-Yamamoto-TP.jpg?itok=Dn4kkp_1')

puts "#{ Chef.count} chefs created."

Restaurant.destroy_all

Restaurant.create(:name => 'Restaurant Gordon Ramsay', :year => 1998, :location => 'London, England', :stars => 3, :chef_id => 1, :image => 'https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage1920108050-50-sweetbread.jpg')
Restaurant.create(:name => 'The Fat Duck', :year => 1995, :location => 'Berkshire, England', :stars => 3, :chef_id => 2, :image => 'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2019/03/25/flying-chance-inside-the-fat-duck-s-inspirational-lunch/3043102-2-eng-GB/Flying-chance-inside-The-Fat-Duck-s-Inspirational-Lunch_wrbm_large.jpg')
Restaurant.create(:name => 'Maison Pic', :year => 1889, :location => 'Drome, France', :stars => 3, :chef_id => 3, :image => 'https://cdn.vox-cdn.com/thumbor/t9B2vaT4ccPlZ_t_Up5jqIZSWWI=/0x0:1280x680/1200x0/filters:focal(0x0:1280x680):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3396846/asp2.0.jpg')
Restaurant.create(:name => 'RyuGin', :year => 2003, :location => 'Tokyo, Japan', :stars => 3, :chef_id => 4, :image => 'https://wp.foodion.net/en/wp-content/uploads/sites/3/2016/08/52407e6549f96c1b219c0f049e929b7f.jpg')

puts "#{Restaurant.count} restaurants created."
