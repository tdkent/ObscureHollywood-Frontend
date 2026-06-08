import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Disclaimer - Obscure Hollywood" },
			{ name: "description", content: "Privacy and terms" },
		],
	}),
});

function RouteComponent() {
	return (
		<div className="page-margins bg-content">
			<div className="my-4 px-6 sm:px-12">
				<div className="flex flex-col gap-8 sm:gap-12">
					<header className="flex flex-col gap-2">
						<h1 className="text-3xl md:text-4xl">Privacy & Terms</h1>
						<p>Last updated: June, 2026</p>
					</header>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Overview</h2>
						<p>
							Obscure Hollywood (obscurehollywood.net) is an informational
							website. It does not provide user accounts, login functionality,
							or interactive features that collect personal information. By
							using this website, you agree to the terms described on this page.
						</p>
					</section>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Information Collection</h2>
						<p>
							This website does not request, collect, or store personal
							information from visitors. There are no user accounts, login
							systems, comment systems, forms, or other features that request
							personal data. This website does not process or store payment
							information. This website does not use cookies or tracking
							technologies.
						</p>
						<h3 className="text-lg">Quizzes</h3>
						<p>
							The site provides an interactive quiz-taking feature. Storage of
							"user" information for the purpose of tracking quiz scores does
							not include personal information. Instead, a randomly generated ID
							is stored in the user's browser and is used to identify the
							current "user" to store quiz information. Data storage is strictly
							limited to the randomly generated ID and quiz data.
						</p>
						<p>
							Note that the randomly generated ID is not associated with any
							permanent identifiers (such as an email address) and may be
							deleted if the user's browser data is deleted. This will result in
							quiz data no longer being retrievable.
						</p>
					</section>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Technical Data and Server Logs</h2>
						<p>
							Like most websites, basic technical information may be logged
							automatically by hosting infrastructure in order to operate and
							secure the service. This may include information such as:
						</p>
						<ul className="list-disc px-4 my-4">
							<li>IP address</li>
							<li>Browser type</li>
							<li>Device information</li>
							<li>Pages requested</li>
							<li>Timestamps of requests</li>
						</ul>
						<p>
							This information is not used to personally identify visitors and
							is only used for operational and security purposes.
						</p>
					</section>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Third-Party Infrastructure</h2>
						<p>
							The site may be delivered through third-party infrastructure such
							as hosting providers, content delivery networks (CDNs), or DNS
							services. These services may collect limited technical data
							necessary to operate their systems.
						</p>
					</section>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Content</h2>
						<p>
							The content on this website is provided for general informational
							purposes only. While reasonable effort may be made to keep
							information accurate, the site makes no guarantees regarding the
							completeness, accuracy, or timeliness of the information
							presented. Content may contain errors or become outdated.
						</p>
					</section>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Site Availability and Bugs</h2>
						<p>
							This website is provided “as is.” The site may contain bugs or
							technical issues that may or may not be corrected. The website may
							be modified, suspended, or permanently shut down at any time and
							for any reason without notice.
						</p>
					</section>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Limitation of Liability</h2>
						<p>
							The information and content on this website are provided for
							general informational purposes only and are offered “as is”
							without warranties of any kind, express or implied.
						</p>
						<p>
							To the fullest extent permitted by law, the operator of this
							website shall not be liable for any loss, damage, or inconvenience
							arising from the use of the site or reliance on its content. This
							includes, but is not limited to, errors or omissions in the
							information provided, temporary unavailability of the website,
							technical issues, or actions taken by visitors based on
							information presented on the site.
						</p>
					</section>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Changes to This Policy</h2>
						<p>
							This Privacy & Terms page may be updated or modified at any time
							without prior notice. Continued use of the site after changes are
							made constitutes acceptance of the updated terms.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
