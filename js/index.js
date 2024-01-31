var app = new Vue({
	el: "#app",
	data: {
		home_text: `
			Honeyhill Farm is a diversified small family farm in Livonia, a hamlet in the Finger Lakes Region of Upstate New York. 
			Honeyhill produces organic grass-fed black Angus beef. Unlike most other farms, Honeyhill Farm sells directly to 
			individuals who come to the farm, at farmer's markets and quality restaurants. Honeyhill Farm is open to customers 
			and visitors by appointment -- please contact us to schedule a visit.
		`,
		about_text: `
			<h4>How We Farm</h4><br/>
			<b>Who are we?</b> We began farming at 54 after decades of large gardens and planning. We are now 75, healthy, happy, look forward to every day, and have no plans for retirement as this is the best thing we have ever done! Fred was both a software and quality engineer for 30 years. Sue was a mom first, and a medical technologist after the kids were gone.<br/>
			<br/>
			<b>We raise 100% grass-fed, finished, and unmedicated superior-quality Angus cattle.</b><br/>
			<br/>
			<b>Available Quantities:</b> 1/8 or 1/2. 1/4 is simply 2/8. Halves offers custom cutting to your exact specifications. Eighths weigh ~50 lbs. and halves weigh ~200 lbs. All beef is dry aged for 2 full weeks then cut and vacuum sealed by our professional butcher.<br/>
			<br/>
			<b>The entire farm is a showplace: clean, neat, and orderly!</b><br/>
			Why is that important? We raise food and believe it ought to be accomplished in a clean and safe environment! That this is controversial makes one wonder.<br/>
			<br/>
			Our pastures appear as county parks surrounded by huge oaks and black walnut trees. One cannot even find manure in the pastures as the dung beetles have removed it underground, literally minutes after being deposited, to feed their young.<br/>
			<br/>
			Yes, dung beetles! Many thought that they only live in Africa as seen in nature programs. Indeed, we have them here in great quantities based on sample analysis, where Cornell discovered an indefinite amount of varieties. As we utilize no substances that would harm them, they thrive. This is just one example of our natural operation.<br/>
			<br/>
			Why are dung beetles important? Removing the dung underground reduces and eliminates various pests on the cattle that are attracted by the dung., while also naturally fertilizing our pastures. This and our managed grazing methodology ensure that the pastures rebound quickly so that weeks later when our cattle visit that same location, they find it again - pristine! This is how the herds of Bison lived and thrived in North America.<br/>
			<br/>
			We raise only the championship Black Angus Beef Cattle with superior genetics sourced from the highest quality in North America for exclusively 100% grass-fed Angus - the WYE Plantation.<br/>
			<br/>
			We purchased this farm in 1978 and have never applied any herbicides, pesticides, or artificial substances to this land! You are invited to walk our beautiful native pastures as we do managed grazing and move 3 times per day forward so that the pastures are never overgrazed. This process is innovative and stress-free for both the farmer and the cattle - a visit is highly recommended. Our 40 acres of grass easily support all of our cattle.<br/>
			<br/>
			Understanding the life cycle of the weeds allows one to manage them easily on pasture without poisons. The only motorized equipment used is a tractor with a mower. Our pastures annually improve in this natural environment.<br/>
			<br/>
			We sell only to individuals and in quantities of 1/8 or 1/2. 2 eighths equals 1/4, and 2 halves equals a whole.<br/>
			Halves offer custom cutting.<br/>
			Most customers are long time i.e. >5 years and some twice or more. Beef is available in the fall.<br/>
			<br/>
			Sue and Fred Forsburg - Honeyhill Farm, 6241 Price Road, Livonia, NY 14487. (585)346-3829 - HoneyhillFarm@Rochester.rr.com<br/>
			<br/>
			<b>All questions and visits are happily received!</b>
		`,
		news_letter: `
			<h4>Honeyhill Farm 2023 News Letter</h4><br/>
			For the first time in three years, we have had to increase our beef price. This increase is only 2%! The price per pound for 2023 is $9.39 and is due to rising costs in fuel and processing expenses plus our supplier of seriously high-quality feeder cattle.<br/>
			<br/>
			We are being upfront and transparent here in this price increase to all our customers and are grateful for your loyal support of our farm through these many years, and we hope we can be trusted to continue.<br/>
			<br/>
			How can we hold with this minuscule increase over 3 years when everything else has gone out of sight? We do not have to purchase feed, fertilizer, herbicides, pesticides, or medications and all the other typical expenses required to maintain cattle in the conventional setting!<br/>
			<br/>
			Our cattle grow well and naturally on our lush pastures - Simply grass, water, and minerals (salt and ground rock) - free choice to keep them happy and healthy.<br/>
			<br/>
			As always, we are pleased to provide a tour of our entire operation, indeed offer a hayride and especially like to introduce the people to the way all cattle should be raised!<br/>
			<br/>
			We use our tractor to maintain the pastures by mowing them after the cattle move through. This practice has escaped our conventional neighbors who spray herbicides, pesticides, and fertilizers. We do none of that and never have!<br/>
			<br/>
			We mow with a 6-foot rotary mower when the weeds flower but before they set seed, so they cannot reproduce, and every year our pastures improve. It is literally that simple! - yet it escapes those who have bought into the notion that chemistry is the modern method! Ask us - we have a remarkable story to tell.<br/>
			<br/>
			Dung beetles immediately remove fresh manure underground to feed their young, whilst also fertilizing the grass, thus you will not find any manure on the surface that attracts pests. Amazing how nature works in one's favor if only left to her own devices. Indeed Cornell conducted a dung beetle survey here in 2022 and discovered many species that cannot survive in conventional operations due to pesticides, pharmaceuticals, etc..<br/>
			<br/>
			We have received deposits for 2023 from many customers at the 2022 delivery and are now requesting deposits for this year from those that are either new or did not commit to 2023 beef purchases.<br/>
			<br/>
			$50 reserves 1/8 and $100 per half reserves with the option of custom cutting.<br/>
			<br/>
			We accept deposits via PayPal to fforsburg@rochester.rr.com or your personal check to Honeyhill Farm, 6241 Price Rd., Livonia, NY 14487<br/>
			<br/>
			Questions? Please call in advance - (585)346-3829 - We like to show off our farm!<br/>
			<br/>
			Thank you,<br/>
			<br/>
			Sue and Fred Forsburg
		`,
		product_info: `
			We sell only to individuals and in quantities of 1/8 or 1/2.<br/>
			<br/>
			$50 reserves 1/8 and $100 per half. 2 eighths equals 1/4, and 2 halves equals a whole.<br/>
			Halves offer custom cutting.<br/>
			<br/>
			We accept deposits via PayPal to fforsburg@rochester.rr.com or your personal check to Honeyhill Farm, 6241 Price Rd., Livonia, NY 14487<br/>
		`,
		contact_text: `
			We accept deposits via PayPal to fforsburg@rochester.rr.com or your personal check to Honeyhill Farm, 6241 Price Rd., Livonia, NY 14487<br/>
			<br/>
			Questions? Please call in advance - (585)346-3829 - We like to show off our farm!<br/>
			<br/>
			Thank you,<br/>
			<br/>
			Sue and Fred Forsburg
		`,
	},
	methods: {},
});
