
let searchInput = document.querySelector(".search-input");
let ytLink;

let homePage = document.querySelector(".home-page");
let historyPage = document.querySelector(".history-page");
let playerPage = document.querySelector(".player-page");
let likedPage = document.querySelector(".liked-page");
let playlistPage = document.querySelector(".playlist-page")

let homeButton = document.querySelector(".home-btn");
let historyButton = document.querySelector(".history-btn");
let likePageButton = document.querySelector(".liked-btn")
let playlistsButton = document.querySelector(".playlists-btn")


let likedVideos = [];
let historyPageVideos = [];

let playlists = [
	{
		name: "Watch Later",
		videos: [],
	},
];

let homePageVideos = [
	{
		id: 1,
		name: "Fullstack Web Development",
		creator: "Academind",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/pkdgVYehiTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB94ZomtAk8QMtMbrgWvwdx574MHA",
		description: "D",
		videoCode: "pkdgVYehiTE",
		likes: 0,
	},
	{
		id: 2,
		name: "Procedural Animation",
		creator: "t3ssel8r",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/KPoeNZZ6H4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTm6LQajkoE5jvp9V-tr6ddxNyHw",
		description: "D",
		videoCode: "KPoeNZZ6H4s",
		likes: 0,
	},
	{
		id: 3,
		name: "My Hero Academia | Official Trailer",
		creator: "AnimeHype",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/vwlulN6OPyw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-FXF5ZnbjKL5gtMdxMDOMvu7ZHw",
		description: "D",
		videoCode: "vwlulN6OPyw",
		likes: 0,
	},
	{
		id: 4,
		name: "Big O Notation",
		creator: "Reducible",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/Q_1M2JaijjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJxIihI3woDWmojdTKnfL9lE9AXQ",
		description: "D",
		videoCode: "Q_1M2JaijjQ",
		likes: 0,
	},
	{
		id: 5,
		name: "Creo - Carnivores",
		creator: "Creo",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/qZSSJk6OHdA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZ4qB5K3fvzHf-GJWS1sIiPQHhQw",
		description: "D",
		videoCode: "qZSSJk6OHdA",
		likes: 0,
	},
	{
		id: 6,
		name: "Python Decorator Functions",
		creator: "mCoding",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/SXApHXsDe8I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAl0_K9WohA2D0M3jLc49CUQ00-dw",
		description: "D",
		videoCode: "SXApHXsDe8I",
		likes: 0,
	},
	{
		id: 7,
		name: "Fairy Tail: 100-Year Quest | Official Teaser",
		creator: "AniTube",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/qiUZXKcCNpA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXCEp2vLmLnS_KSkikps80zMZj4Q",
		description: "D",
		videoCode: "qiUZXKcCNpA",
		likes: 0,
	},
	{
		id: 8,
		name: "Web Scraping APIs",
		creator: "John Watson",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/DqtlR0y0suo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUoRjjgJemvniu8uAsyHRJbH-Qkg",
		description: "D",
		videoCode: "DqtlR0y0suo",
		likes: 0,
	},
	{
		id: 9,
		name: "Seemingly Impossible Riddle",
		creator: "Veritasium",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/iSNsgj1OCLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTCzTes5nhCdf5ZeFE15z1eydO4Q",
		description: "D",
		videoCode: "iSNsgj1OCLA",
		likes: 0,
	},
	{
		id: 10,
		name: "First Ever Player In Minecraft",
		creator: "TheMisterEpic",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/PsawtFK3WB4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRl_FhY785JpgJ0PmnaWlOp0Qfng",
		description: "D",
		videoCode: "PsawtFK3WB4",
		likes: 0,
	},
	{
		id: 11,
		name: "CSS3 Animation",
		creator: "Traversy Media",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/zHUpx90NerM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD81lAQu1WnjIGwRe9HAel4djxgtw",
		description: "D",
		videoCode: "zHUpx90NerM",
		likes: 0,
	},
	{
		id: 12,
		name: "Touring A Floating House",
		creator: "Enes Plus",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/wHAZyUAnO-0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5CnOgEO7hFyRbeiZqsnHOdBQ3sA",
		description: "D",
		videoCode: "wHAZyUAnO-0",
		likes: 0,
	},
	{
		id: 13,
		name: "Node JS Rest API",
		creator: "Dev Ed",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/vjf774RKrLc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3MvsrkUcObxof4Vet6p2PIIIpKw",
		description: "D",
		videoCode: "vjf774RKrLc",
		likes: 0,
	},
	{
		id: 14,
		name: "Creo - Red Horizon",
		creator: "Creo",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/kmYgwc4QYhE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7U3kX6-NxOtNC6stoz5XgkwtUPQ",
		description: "D",
		videoCode: "kmYgwc4QYhE",
		likes: 0,
	},
	{
		id: 15,
		name: "Aggresive Chess Openings",
		creator: "GothamChess",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/Ib8XaRKCAfo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqKS3f7MNBD-K4BpIAIPjf1YA9JA",
		description: "D",
		videoCode: "Ib8XaRKCAfo",
		likes: 0,
	},
	{
		id: 16,
		name: "Beginner Python Projects",
		creator: "Tech With Tim",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/DLn3jOsNRVE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5jRMJSxmHXd6NwJZAOaXTPtzhYA",
		description: "D",
		videoCode: "DLn3jOsNRVE",
		likes: 0,
	},
	{
		id: 17,
		name: "NBA Epic Moments",
		creator: "dime",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/CXLM08fZO5o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQ9BmR0pJUIsKeVJz_7SOt_-FBuQ",
		description: "D",
		videoCode: "CXLM08fZO5o",
		likes: 0,
	},
	{
		id: 18,
		name: "Express JS Full Course",
		creator: "freeCodeCamp.org",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g",
		description: "D",
		videoCode: "Oe421EPjeBE",
		likes: 0,
	},
	{
		id: 19,
		name: "Optimistic Nihilism",
		creator: "Kurzgesagt - In A Nutshell",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/MBRqu0YOH14/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN7_ERbJzhOEhVlvGm9QVyuZRWYQ",
		description: "D",
		videoCode: "MBRqu0YOH14",
		likes: 0,
	},
	{
		id: 20,
		name: "Wayde Van Niekerk Just Made A Statement",
		creator: "Total Running Productions",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/9GWOamisyzg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtnLObTwWaRVvAs1cAMHukQvBzJg",
		description: "D",
		videoCode: "9GWOamisyzg",
		likes: 0,
	},
	{
		id: 21,
		name: "Learn CSS Box Model",
		creator: "Web Dev Simplified",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/rIO5326FgPE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxhd3UWweh3VFzyLarDYGzwWcYhw",
		description: "D",
		videoCode: "rIO5326FgPE",
		likes: 0,
	},
	{
		id: 22,
		name: "This Circle Is In Vanilla Minecraft",
		creator: "Mysticat",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/3u65Dk1bqWg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqeZWWpD50FHenR7sP9uF80AY_CA",
		description: "D",
		videoCode: "3u65Dk1bqWg",
		likes: 0,
	},
	{
		id: 23,
		name: "Async JS Crash Course",
		creator: "Traversy Mdeia",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/PoRJizFvM7s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuI84djecG8XSDiJ9RT0MxT01-rQ",
		description: "D",
		videoCode: "PoRJizFvM7s",
		likes: 0,
	},
	{
		id: 24,
		name: "How Norway Got Insanely Rich",
		creator: "Casual Scholar",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/9Wq2S1b-HCs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCG3qiTMzFwzRDgYRmdf4MyhlQJwg",
		description: "D",
		videoCode: "9Wq2S1b-HCs",
		likes: 0,
	},
	{
		id: 25,
		name: "Punishing Beginner Mistakes",
		creator: "Eric Rosen",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/D2Gs5upS1AA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiBQ7h7Ba7N07ArKqO88pos_TIkQ",
		description: "D",
		videoCode: "D2Gs5upS1AA",
		likes: 0,
	},
	{
		id: 26,
		name: "The Tragedy Of Humanity's Greatest Achievement",
		creator: "Pursuit of Wonder",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/hUfI7y3T8K4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLqDOjdtf0dZ5hckOD-4uGh_f0Cw",
		description: "D",
		videoCode: "hUfI7y3T8K4",
		likes: 0,
	},
	{
		id: 27,
		name: "Learn Dynamic Module Imports",
		creator: "Web Dev Simplified",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/ddVm53j80vc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBPRLc1xS4nqa0epbckT4gELyMyQ",
		description: "D",
		videoCode: "ddVm53j80vc",
		likes: 0,
	},
	{
		id: 28,
		name: "Greedy Algorithms Tutorial",
		creator: "freeCodeCamp.org",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/bC7o8P_Ste4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7dxwIkhn3CLMUZWFdAHeI0l1S_A",
		description: "D",
		videoCode: "bC7o8P_Ste4",
		likes: 0,
	},
	{
		id: 29,
		name: "Turbulent Flow vs. Laminar Flow",
		creator: "Veritasium",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/5zI9sG3pjVU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDe-5M0lXNZacYgTxmh1-ZtfUGBQ",
		description: "D",
		videoCode: "5zI9sG3pjVU",
		likes: 0,
	},
	{
		id: 30,
		name: "Web Development In 2022",
		creator: "Traversy Media",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/EqzUcMzfV1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAup3YgMytqO1Vii4Myhwp4_wFZhQ",
		description: "D",
		videoCode: "EqzUcMzfV1w",
		likes: 0,
	},
	{
		id: 31,
		name: "JavaScript ES6 Modules",
		creator: "The Codeholic",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/ananPWEdfDA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiPl9OAocoXYXCdlMQVA51irI9bg",
		description: "D",
		videoCode: "ananPWEdfDA",
		likes: 0,
	},
	{
		id: 32,
		name: "The Misfit of Demon King Academy | Official Trailer",
		creator: "AnimeHype",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/sn9Rufl_RIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQxSb98GNhVBenXlMM9CDqEKJQEQ",
		description: "D",
		videoCode: "sn9Rufl_RIc",
		likes: 0,
	},
	{
		id: 33,
		name: "Python Full Course",
		creator: "Bro Code",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/XKHEtdqhLK8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwiaYg15KmdfuYUhMbmDWXAoam8Q",
		description: "D",
		videoCode: "XKHEtdqhLK8",
		likes: 0,
	},
	{
		id: 34,
		name: "Would You Take This Bet",
		creator: "Veritasium",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/vBX-KulgJ1o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyJXNRHS0bOVmkKQETq2D4ojeONA",
		description: "D",
		videoCode: "vBX-KulgJ1o",
		likes: 0,
	},
	{
		id: 35,
		name: "Javascript Neural Networks",
		creator: "freeCodeCamp.org",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/Rs_rAxEsAvI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDotaQQ-V-DzldSz8ZT1NKk5t3TGg",
		description: "D",
		videoCode: "Rs_rAxEsAvI",
		likes: 0,
	},
	{
		id: 36,
		name: "Calculate Square Roots In You Head",
		creator: "MindYourDecisions",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/I7TFYa1v9xI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYjxKY8HB7bHa3HGFG_XUkjJBtCQ",
		description: "D",
		videoCode: "I7TFYa1v9xI",
		likes: 0,
	},
	{
		id: 36,
		name: "Solo Leveling | Official Trailer",
		creator: "AniTV",
		views: 0,
		thumbnail: "https://i.ytimg.com/vi/_0G4fAvucIs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDXBkvH8StfJ1Yf5vbtQwnc-KClg",
		description: "D",
		videoCode: "_0G4fAvucIs",
		likes: 0,
	},
];



// Home Page Load
function videoGridLoad(page, videoList) {
	removeAllChildren(page);

	for (let video of videoList) {

		let divider = document.createElement("div");

		divider.style.display = "flex";
		divider.style.flexDirection = "column";
		divider.setAttribute("class", "grid-item");
		page.appendChild(divider);
		divider.style.border = "1px solid var(--yt-light)";
		divider.style.height = "275px";
		divider.style.padding = "5px";
		divider.style.backgroundColor = "var(--yt-body)";


		let newImage = document.createElement("img");
		newImage.setAttribute("src", video.thumbnail);
		newImage.style.width = "289px";
		newImage.style.zIndex = "1";
		divider.appendChild(newImage);

		newImage.addEventListener("click", () => {
			video.views++;
			historyPageVideos.unshift(video);
			showPlayer();
			playerPageLoad(video);
		});

		let videoTitle = document.createElement("p");
		let titleText = document.createTextNode(video.name);
		videoTitle.appendChild(titleText);
		videoTitle.style.color = "white";
		videoTitle.style.marginTop = "10px";
		videoTitle.style.marginBottom = "-7px";
		divider.appendChild(videoTitle);

		let videoCreator = document.createElement("p");
		let creatorText = document.createTextNode(video.creator);
		videoCreator.appendChild(creatorText);
		videoCreator.style.color = "white";
		videoCreator.style.fontSize = "13px";
		divider.appendChild(videoCreator);

		let videoViews = document.createElement("p");
		let viewText = document.createTextNode(`${video.views} views`);
		videoViews.appendChild(viewText);
		videoViews.style.color = "white";
		videoViews.style.fontSize = "13px";
		videoViews.style.fontSize = "13px";
		videoViews.style.position = "relative";
		videoViews.style.bottom = "20px";
		divider.appendChild(videoViews);
	};
}


// History Page
function videoTableLoad(page, videoList) {
	removeAllChildren(page);

	for (let video of videoList) {

		let localPlayer = false;

		// page.style.border = "3px solid white";
		page.style.display = "flex";
		page.style.flexDirection = "column";

		let videoCell = document.createElement("div");
		videoCell.style.width = "1000px";
		videoCell.style.display = "flex";
		videoCell.style.marginTop = "13px";
		videoCell.style.marginLeft = "13px";
		videoCell.style.border = "2px solid var(--yt-light)";
		page.appendChild(videoCell);

		let videoImage = document.createElement("img");
		videoImage.setAttribute("src", video.thumbnail);
		videoImage.style.width = "300px";
		videoImage.style.borderRight = "2px solid var(--yt-light)";
		videoCell.appendChild(videoImage);

		videoImage.addEventListener("click", (e) => {
			historyPageVideos.unshift(video);
			video.views++
			showPlayer();
			playerPageLoad(video);
		});

		let videoInfo = document.createElement("div");
		videoInfo.style.padding = "5px";
		videoInfo.style.marginLeft = "10px";
		videoInfo.style.marginRight = "10px";
		videoCell.appendChild(videoInfo);

		let videoTitle = document.createElement("p");
		videoTitle.innerText = video.name;
		videoTitle.style.color = "white";
		videoInfo.appendChild(videoTitle);

		let videoCreator = document.createElement("p");
		videoCreator.innerText = video.creator;
		videoCreator.style.color = "white";
		videoCreator.style.fontSize = "13px";
		videoCreator.style.marginTop = "-7px";
		videoCreator.style.marginBottom = "-7px";
		videoInfo.appendChild(videoCreator);	

		let videoViews = document.createElement("p");
		videoViews.innerText = `${video.views} views`;
		videoViews.style.color = "white";
		videoViews.style.fontSize = "13px";
		videoInfo.appendChild(videoViews);

		let videoDesc = document.createElement("p");
		videoDesc.innerText = video.description;
		videoDesc.style.color = "var(--yt-light)";
		videoDesc.style.fontSize = "13px";
		videoInfo.appendChild(videoDesc);
	};	
};


function playerPageLoad(video) {
	removeAllChildren(playerPage);

	let columns = document.createElement("div");
	columns.style.display = "flex";
	playerPage.appendChild(columns);

	let videoSection = document.createElement("div");
	videoSection.style.display = "flex";
	videoSection.style.flexDirection = "column";
	videoSection.style.margin = "20px";
	columns.appendChild(videoSection);

	let videoFrame = document.createElement("iframe");
	videoFrame.setAttribute("src", `https:/www.youtube.com/embed/${video.videoCode}`)
	videoFrame.style.width = "800px";
	videoFrame.style.height = "450px";
	videoSection.appendChild(videoFrame);

	let videoTitle = document.createElement("p");
	videoTitle.innerText = video.name;
	videoTitle.style.color = "white";
	videoTitle.style.fontSize = "20px";
	videoSection.appendChild(videoTitle);

	let videoCreator = document.createElement("p");
	videoCreator.innerText = video.creator;
	videoCreator.style.color = "white";
	videoCreator.style.fontSize = "15px"
	videoCreator.style.marginTop = "-10px"
	videoCreator.style.marginBottom = "-10px"
	videoSection.appendChild(videoCreator);

	let videoViews = document.createElement("p");
	videoViews.innerText = `${video.views} views`;
	videoViews.style.color = "white";
	videoViews.style.fontSize = "15px";
	videoSection.appendChild(videoViews);


	let btnDiv = document.createElement("div");
	btnDiv.style.display = "flex";
	btnDiv.style.alignItems = "center"
	videoSection.appendChild(btnDiv);

	let videoLikes = document.createElement("p");
	videoLikes.innerText = `${video.likes || 0} likes`;
	videoLikes.style.color = "white";
	videoLikes.style.fontSize = "15px";
	// videoLikes.style.marginTop = "-10px"
	btnDiv.appendChild(videoLikes);

	likeButton = document.createElement("button");
	likeButton.style.marginLeft = "40px";
	likeButton.innerText = "Like"
	likeButton.style.backgroundColor = "var(--yt-red)";
	likeButton.style.color = "white";
	likeButton.style.width = "50px";
	likeButton.style.height = "30px"
	btnDiv.appendChild(likeButton);

	likeButton.addEventListener("click", () => {
		video.likes++;
		videoLikes.innerText = `${video.likes || 0} likes`;
		likedVideos.unshift(video);
	})

	let unlikeButton = document.createElement("button");
	unlikeButton.style.marginLeft = "30px";
	unlikeButton.innerText = "Unlike"
	unlikeButton.style.backgroundColor = "var(--yt-red)";
	unlikeButton.style.color = "white";
	unlikeButton.style.width = "60px";
	unlikeButton.style.height = "30px"
	btnDiv.appendChild(unlikeButton);

	unlikeButton.addEventListener("click", () => {
		video.likes--;
		videoLikes.innerText = `${video.likes || 0} likes`;
		likedVideos.splice(likedVideos.indexOf(video));
	})

	let addToPlaylistButton = document.createElement("button");
	addToPlaylistButton.style.marginLeft = "30px";
	addToPlaylistButton.innerText = "Add To Playlist"
	addToPlaylistButton.style.backgroundColor = "var(--yt-red)";
	addToPlaylistButton.style.color = "white";
	addToPlaylistButton.style.width = "100px";
	addToPlaylistButton.style.height = "40px"
	btnDiv.appendChild(addToPlaylistButton);

	addToPlaylistButton.addEventListener("click", () => {
		showPlaylistList("Add Video To Playlist", video);
	})	


	let videoDesc = document.createElement("p");
	videoDesc.style.marginTop = "-7px"
	videoDesc.innerText = video.description;
	videoDesc.style.color = "var(--yt-light)";
	videoDesc.style.fontSize = "15px";
	videoSection.appendChild(videoDesc);


	let othersSection = document.createElement("div");
	othersSection.style.marginTop = "20px";
	othersSection.style.display = "flex";
	othersSection.style.flexDirection = "column";
	columns.appendChild(othersSection);

	for (let index of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
		let sideVideo = homePageVideos[getRandomInt(0, homePageVideos.length-1)]; // homePageVideos[homePageVideos.indexOf(video)+index]
		
		let container = document.createElement("div");
		container.style.display = "flex";
		container.style.alignItems = "center";
		container.style.marginTop = "5px";
		container.style.marginRight = "20px";
		container.style.marginBottom = "5px";
		container.style.border = "2px solid var(--yt-light)";
		container.style.width = "390px";
		container.style.height = "100px";
		othersSection.appendChild(container);

		let videoImage = document.createElement("img");
		videoImage.setAttribute("src", sideVideo.thumbnail);
		videoImage.style.width = "170px";
		videoImage.style.height = "100px";
		videoImage.style.borderRight = "2px solid var(--yt-light)";
		container.appendChild(videoImage);

		videoImage.addEventListener("click", () => {
			sideVideo.views++
			historyPageVideos.unshift(sideVideo);
			showPlayer();
			playerPageLoad(sideVideo);
		})

		let infoContainer = document.createElement("div");
		infoContainer.style.marginLeft = "7px";
		infoContainer.style.paddingRight = "3px";
		infoContainer.style.display = "flex";
		infoContainer.style.justifyContent = "space-around";
		infoContainer.style.flexDirection = "column";
		container.appendChild(infoContainer);

		let videoTitle = document.createElement("p");
		videoTitle.innerText = sideVideo.name;
		videoTitle.style.color = "white";
		videoTitle.style.fontSize = "15px";
		infoContainer.appendChild(videoTitle);

		let videoCreator = document.createElement("p");
		videoCreator.innerText = sideVideo.creator;
		videoCreator.style.color = "white";
		videoCreator.style.fontSize = "13px"
		videoCreator.style.marginTop = "-10px"
		videoCreator.style.marginBottom = "-10px"
		infoContainer.appendChild(videoCreator);

		let videoViews = document.createElement("p");
		videoViews.innerText = `${sideVideo.views} views`;
		videoViews.style.color = "white";
		videoViews.style.fontSize = "13px";
		infoContainer.appendChild(videoViews);

	}
}



function showPlaylistList(title, video) {

	let dialog = document.createElement("div");
	dialog.style.display = "flex";
	dialog.style.flexDirection = "column";
	dialog.style.zIndex = "100";
	dialog.style.width = "800px";
	dialog.style.minHeight = "400px";
	dialog.style.border = "5px solid var(--yt-red)"
	dialog.style.backgroundColor = "black";
	dialog.style.top = "100px"
	dialog.style.left = "300px"
	dialog.style.position = "fixed";
	document.body.appendChild(dialog);

	let topBar = document.createElement("div");
	topBar.style.display = "flex";
	topBar.style.justifyContent = "space-between";
	topBar.style.height = "50px";
	topBar.style.borderBottom = "5px solid var(--yt-red)";
	dialog.appendChild(topBar);

	let dialogTitle = document.createElement("p");
	dialogTitle.innerText = title;
	dialogTitle.style.color = "white";
	dialogTitle.style.fontWeight = "bolder";
	dialogTitle.style.paddingLeft = "10px";
	topBar.appendChild(dialogTitle);


	for (let playlist of playlists) {
		let playlistName = document.createElement("p");
		playlistName.innerText = playlist.name;
		playlistName.style.color = "white";
		//playlistName.style.backgroundColor = "blue";
		playlistName.style.paddingTop = "7px";
		playlistName.style.paddingBottom = "7px";
		playlistName.style.marginTop = "3px";
		playlistName.style.marginBottom = "0px";
		playlistName.style.paddingLeft = "10px";
		playlistName.style.borderBottom = "2px solid var(--yt-light)";
		dialog.appendChild(playlistName);

		if (video == null) {
			playlistName.addEventListener("click", () => {
				showPlaylist();
				removeAllChildren(playlistPage);
				videoTableLoad(playlistPage, playlist.videos);
				dialog.style.display = "none";
			})
		}

		else {
			playlistName.addEventListener("click", () => {
				playlist.videos.unshift(video);
				dialog.style.display = "none";
			})
		}
	};

	let createPlaylistButton = document.createElement("button");
	createPlaylistButton.style.backgroundColor = "var(--yt-red)";
	createPlaylistButton.innerText = "Create Playlist";
	createPlaylistButton.style.width = "120px";
	createPlaylistButton.style.height = "35px";
	createPlaylistButton.style.color = "white";
	createPlaylistButton.style.fontWeight = "bolder";
	createPlaylistButton.style.border = "2px solid white";
	createPlaylistButton.style.borderRadius = "20px";
	createPlaylistButton.style.alignSelf = "center";
	topBar.appendChild(createPlaylistButton);

	createPlaylistButton.addEventListener("click", () => {
		removeAllChildren(dialog);
		dialogTitle.innerText = "Create Playlist";
		dialog.appendChild(topBar);

		let nameLabel = document.createElement("p");
		nameLabel.style.color = "white";
		nameLabel.innerText = "Playlist Name";
		nameLabel.style.marginLeft = "20px";
		nameLabel.style.marginTop = "20px";
		dialog.appendChild(nameLabel);

		let newName = document.createElement("input");
		newName.style.backgroundColor = "var(--yt-nav)";
		newName.style.color = "white";
		newName.style.width = "200px";
		newName.style.marginLeft = "20px";
		newName.style.marginTop = "-10px";
		newName.style.border = "2px solid var(--yt-light)";
		dialog.appendChild(newName);

		let submitButton = document.createElement("button");
		submitButton.style.backgroundColor = "var(--yt-red)";
		submitButton.innerText = "Create";
		submitButton.style.width = "120px";
		submitButton.style.height = "35px";
		submitButton.style.color = "white";
		submitButton.style.fontWeight = "bolder";
		submitButton.style.border = "2px solid white";
		submitButton.style.borderRadius = "20px";
		submitButton.style.marginTop = "20px";
		submitButton.style.marginLeft = "20px";
		dialog.appendChild(submitButton);

		submitButton.addEventListener("click", () => {
			let newPlaylist = {name: newName.value, videos: []};
			playlists.push(newPlaylist);
			dialog.style.display = "none";
			showPlaylistList("Open Playlist", null);
		})
	})

	let removePlaylistButton = document.createElement("button");
	removePlaylistButton.style.backgroundColor = "var(--yt-red)";
	removePlaylistButton.innerText = "Remove Playlist";
	removePlaylistButton.style.width = "120px";
	removePlaylistButton.style.height = "35px";
	removePlaylistButton.style.color = "white";
	removePlaylistButton.style.fontWeight = "bolder";
	removePlaylistButton.style.border = "2px solid white";
	removePlaylistButton.style.borderRadius = "20px";
	removePlaylistButton.style.alignSelf = "center";
	topBar.appendChild(removePlaylistButton);

	removePlaylistButton.addEventListener("click", () => {
		removeAllChildren(dialog);
		dialogTitle.innerText = "Remove Playlist";
		dialog.appendChild(topBar);

		let nameLabel = document.createElement("p");
		nameLabel.style.color = "white";
		nameLabel.innerText = "Playlist Name";
		nameLabel.style.marginLeft = "20px";
		nameLabel.style.marginTop = "20px";
		dialog.appendChild(nameLabel);

		let name = document.createElement("input");
		name.style.backgroundColor = "var(--yt-nav)";
		name.style.color = "white";
		name.style.width = "200px";
		name.style.marginLeft = "20px";
		name.style.marginTop = "-10px";
		name.style.border = "2px solid var(--yt-light)";
		dialog.appendChild(name);

		let submitButton = document.createElement("button");
		submitButton.style.backgroundColor = "var(--yt-red)";
		submitButton.innerText = "Remove";
		submitButton.style.width = "120px";
		submitButton.style.height = "35px";
		submitButton.style.color = "white";
		submitButton.style.fontWeight = "bolder";
		submitButton.style.border = "2px solid white";
		submitButton.style.borderRadius = "20px";
		submitButton.style.marginTop = "20px";
		submitButton.style.marginLeft = "20px";
		dialog.appendChild(submitButton);

		submitButton.addEventListener("click", () => {
			for (let playlist of playlists) {
				if (playlist.name == name.value) {
					playlists.splice(playlists.indexOf(playlist));
				}
			}

			dialog.style.display = "none";
			showPlaylistList("Open Playlist", null);
		})


	})

	let exitButton = document.createElement("button");
	exitButton.style.backgroundColor = "var(--yt-red)";
	exitButton.style.width = "50px";
	exitButton.style.color = "white";
	exitButton.style.fontSize = "30px";
	exitButton.innerText = "x"
	topBar.appendChild(exitButton)

	exitButton.addEventListener("click", () => {
		dialog.style.display = "none";
	})

};


function shuffle(array) {
	let currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}

	return array;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function stringContains(searchTerm, string) {
	// returns (searchTerm in string)

	let string2 = string.toLowerCase()
	let string3 = string.toUpperCase()

	let list1 = string.split(" ");
	let list2 = string2.split(" ");
	let list3 = string3.split(" ");

	if (searchTerm == string) {
		return true;
	}

	for (let item of list1) {
		if (searchTerm == item) {
			return true;
		};
	};

	for (let item of list2) {
		if (searchTerm == item) {
			return true;
		};
	};

	for (let item of list3) {
		if (searchTerm == item) {
			return true;
		};
	};
};


function removeAllChildren(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	};
};


function showHome() {
	homePage.style.display = "grid";
	historyPage.style.display = "none";
	playerPage.style.display = "none";
	likedPage.style.display = "none";
	playlistPage.style.display = "none";
};


function showHistory() {
	homePage.style.display = "none";
	historyPage.style.display = "grid";
	playerPage.style.display = "none";
	likedPage.style.display = "none";
	playlistPage.style.display = "none";
};


function showPlayer() {
	homePage.style.display = "none";
	historyPage.style.display = "none";
	playerPage.style.display = "block";
	likedPage.style.display = "none";
	playlistPage.style.display = "none";
};


function showLiked() {
	homePage.style.display = "none";
	historyPage.style.display = "none";
	playerPage.style.display = "none";
	likedPage.style.display = "block";
	playlistPage.style.display = "none";

};


function showPlaylist() {
	homePage.style.display = "none";
	historyPage.style.display = "none";
	playerPage.style.display = "none";
	likedPage.style.display = "none";
	playlistPage.style.display = "block";
};


searchInput.addEventListener("change", (event) => {
	let str1 = searchInput.value.split(" ");
	let str2;

	for (let part of str1) {
		str2 = `${str2}+${part}`;
	};

	ytLink = `https://www.youtube.com/results?search_query=${str2}`;
	ytLink = ytLink.replace("++", "+").replace("undefined", "");
	console.log(ytLink);
});


searchInput.addEventListener("input", (event) => {
	let newVideoList = [];

	for (video of homePageVideos) {
		if ((stringContains(searchInput.value, video.name) == true) || (stringContains(searchInput.value, video.creator) == true)) {
			newVideoList.push(video);
		};
	};

	if (searchInput.value == "") {
		videoGridLoad(homePage, homePageVideos);
	} else {
		videoGridLoad(homePage, newVideoList);
	};
	

});


historyButton.addEventListener("click", () => {
	videoTableLoad(historyPage, historyPageVideos);
});

likePageButton.addEventListener("click", () => {
	videoTableLoad(likedPage, likedVideos);
});

homeButton.addEventListener("click", () => {
	videoGridLoad(homePage, homePageVideos);
})


shuffle(homePageVideos);
videoGridLoad(homePage, homePageVideos);


