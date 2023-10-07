Vue.component("v-header", {
	data: function () {
		return {
			title: "Honeyhill Farm",
		};
	},
	template: `
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<h3>{{title}}</h3>
				</div>
			</div>
			<div class="row">
				<ul class="nav nav-tabs justify-content-center" role="tablist">
					<li class="nav-item" role="presentation">
						<button
							class="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true"
						>
							Home
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link"
							id="about-us-tab"
							data-bs-toggle="tab"
							data-bs-target="#about-us"
							type="button"
							role="tab"
							aria-controls="about-us"
							aria-selected="false"
						>
							About Us
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link"
							id="contact-us-tab"
							data-bs-toggle="tab"
							data-bs-target="#contact-us"
							type="button"
							role="tab"
							aria-controls="contact-us"
							aria-selected="false"
						>
							Contact Us
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link"
							id="news-letter-tab"
							data-bs-toggle="tab"
							data-bs-target="#news-letter"
							type="button"
							role="tab"
							aria-controls="news-letter"
							aria-selected="false"
						>
							News Letter
						</button>
					</li>
				</ul>
			</div>
		</div>
	`,
});
