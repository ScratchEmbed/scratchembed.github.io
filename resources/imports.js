function reference(link, pageTitle) {
	const headerContent = `
	<a href="${link}index.html" class="inlinelink" id="return"><strong>&lt Homepage</strong></a>
	<h2 id="title">${pageTitle}</h2>`
	if (pageTitle != "home") {
		document.getElementById("header").innerHTML = headerContent;
	}

	const footerContent = `
	<div class="footerlinks">
		<div class="legal">
			<h2>Legal</h2>
			<h3><a href="${link}pages/guidelines" class="inlinelink">Guidelines of Use</a></h3>
			<h3><a href="${link}pages/disclaimer" class="inlinelink">Disclaimer</a></h3>
			<h3><a href="${link}pages/licence" class="inlinelink">Licence</a></h3>
		</div>
		<div class="development">
			<h2>Development</h2>
			<h3><a href="${link}pages/credits" class="inlinelink">Credits</a></h3>
			<h3><a href="${link}pages/contributing" class="inlinelink">Contribute</a></h3>
			<h3><a href="${link}pages/docs" class="inlinelink">Documentation</a></h3>
		</div>
		<div class="contributers">
			<h2>Support</h2>
			<h3><a href="${link}pages/contact" class="inlinelink">Contact</a></h3>
			<h3><a href="${link}pages/report" class="inlinelink">Report an Issue</a></h3>
		</div>
	</div>
	<br>
	<div class="footerinfo">
		<p>Scratch Embed is open sourced and can be found on <a href="https://github.com/ScratchEmbed" class="inlinelink">Github</a><br>Thank you to all of our users</p>
	</div>`
	document.getElementById("footer").innerHTML = footerContent;
}
