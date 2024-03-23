import fullVideoList from "./videos.js";

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

// let fullVideoList = ;

let homePageVideos;
let historyPageVideos = [];
let likedVideos = [];

let playlists = [
	{
		name: "Watch Later",
		videos: []
	}
];

let user = {name: "Justin E."};


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
		newImage.setAttribute("src", `https://i.ytimg.com/vi/${video.videoCode}/hq720.jpg`);
		newImage.style.width = "289px";
		newImage.style.zIndex = "1";
		divider.appendChild(newImage);

		newImage.addEventListener("click", () => {
			video.views++; // Update: video.views (Adds Views To Video)
			historyPageVideos.unshift(video); // Update: historyPageVideos (Add Video To History)
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
		videoViews.style.position = "relative";
		videoViews.style.bottom = "20px";
		divider.appendChild(videoViews);
	};
}


// History Page
function videoTableLoad(page, videoList) {
	removeAllChildren(page);

	for (let video of videoList) {

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
		videoImage.setAttribute("src", `https://i.ytimg.com/vi/${video.videoCode}/hq720.jpg`);
		videoImage.style.width = "300px";
		videoImage.style.borderRight = "2px solid var(--yt-light)";
		videoCell.appendChild(videoImage);

		videoImage.addEventListener("click", (e) => {
			historyPageVideos.unshift(video); // Update: historyPageVideos (Add Video To History)
			video.views++ // Update: video.views (Adds View To Video)
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
	videoFrame.setAttribute("src", `https://www.youtube.com/embed/${video.videoCode}`)
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

	let likeButton = document.createElement("button");
	likeButton.style.marginLeft = "40px";
	likeButton.innerText = "Like"
	likeButton.style.backgroundColor = "var(--yt-red)";
	likeButton.style.color = "white";
	likeButton.style.width = "50px";
	likeButton.style.height = "30px"
	btnDiv.appendChild(likeButton);

	likeButton.addEventListener("click", () => {
		video.likes++; // Update: video.likes (Likes A Video)
		videoLikes.innerText = `${video.likes || 0} likes`;
		likedVideos.unshift(video); // Update: likedVideos (Adds Video To Liked Playlist)
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
		video.likes--; // Update: video.likes (Unlikes A Video)
		videoLikes.innerText = `${video.likes || 0} likes`;
		likedVideos.splice(likedVideos.indexOf(video)); // Update: likedVideos (Removes Video From Liked Playlist)
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

	if (video.comments) {

		let commentLabel = document.createElement("p");
		commentLabel.innerText = "Comments";
		commentLabel.style.color = "white";
		commentLabel.style.borderTop = "1px solid var(--yt-light)"
		commentLabel.style.paddingTop = "10px";
		videoSection.appendChild(commentLabel);

		let inputSection = document.createElement("div");
		inputSection.style.display = "flex";
		inputSection.style.alignItems = "center";
		inputSection.style.marginBottom = "20px";
		videoSection.appendChild(inputSection);


		let commentInput = document.createElement("textarea");
		commentInput.style.backgroundColor = "var(--yt-input)";
		commentInput.setAttribute("rows", "4");
		commentInput.setAttribute("placeholder", "Positive Comments Only");
		commentInput.style.color = "white";
		commentInput.style.width = "450px";
		commentInput.style.height = "50px";
		inputSection.appendChild(commentInput);

		let sendButton = document.createElement("button");
		sendButton.innerText = "Send";
		sendButton.style.width = "75px";
		sendButton.style.height = "40px";
		sendButton.style.borderRadius = "5px";
		sendButton.style.backgroundColor = "var(--yt-red)";
		sendButton.style.color = "white";
		sendButton.style.fontWeight = "bold";
		sendButton.style.marginLeft = "20px";
		sendButton.style.border = "1px solid white";
		inputSection.appendChild(sendButton);


		let commentsSection = document.createElement("div");
		videoSection.appendChild(commentsSection);

		for (let comment of video.comments) {
			let commentDiv = document.createElement("div");
			//commentDiv.style.border = "4px solid white";
			commentDiv.style.borderTop = "1px solid var(--yt-light)";
			commentDiv.style.width = "600px";
			//commentDiv.style.height = "70px";
			commentsSection.appendChild(commentDiv);

			let senderLabel = document.createElement("p");
			senderLabel.innerText = comment.sender;
			senderLabel.style.color = "white";
			senderLabel.style.fontWeight = "bold";
			senderLabel.style.marginBottom = "-10px"
			commentDiv.appendChild(senderLabel);

			let msgLabel = document.createElement("p");
			msgLabel.innerText = comment.message;
			msgLabel.style.color = "var(--yt-light)";
			commentDiv.appendChild(msgLabel);
		}


		sendButton.addEventListener("click", () => {
			if ((commentInput.value != "") && (commentInput.value != " ")) {
				video.comments.unshift({sender: user.name, message: commentInput.value}); // Update: video.comments (Adds New Comment To Video)
				playerPageLoad(video);
			}
		})

	}


	let othersSection = document.createElement("div");
	othersSection.style.marginTop = "20px";
	othersSection.style.display = "flex";
	othersSection.style.flexDirection = "column";
	columns.appendChild(othersSection);

	for (let index of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
		let sideVideo = fullVideoList[getRandomInt(0, fullVideoList.length-1)]; // fullVideoList[fullVideoList.indexOf(video)+index]
		
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
		videoImage.setAttribute("src", `https://i.ytimg.com/vi/${sideVideo.videoCode}/hq720.jpg`);
		videoImage.style.width = "170px";
		videoImage.style.height = "100px";
		videoImage.style.borderRight = "2px solid var(--yt-light)";
		container.appendChild(videoImage);

		videoImage.addEventListener("click", () => {
			sideVideo.views++
			historyPageVideos.unshift(sideVideo); // Update: historyPageVideos (Adds Video To History)
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
				playlist.videos.unshift(video); // Update: playlist.videos (Adds Video To Playlist)
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
			playlists.push(newPlaylist); // Update: playlists (Creates New Playlist)
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
					playlists.splice(playlists.indexOf(playlist)); // Update: playlists (Deletes A Playlist)
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

	for (let word of searchTerm.split(" ")) {

		for (let item of list1) {
			if (word == item) {
				return true;
			};
		};

		for (let item of list2) {
			if (word == item) {
				return true;
			};
		};

		for (let item of list3) {
			if (word == item) {
				return true;
			};
		};
	}
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

	for (let video of fullVideoList) {
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
	showHistory();
});

likePageButton.addEventListener("click", () => {
	videoTableLoad(likedPage, likedVideos);
	showLiked();
});

homeButton.addEventListener("click", () => {
	videoGridLoad(homePage, homePageVideos);
	showHome();
})

playlistsButton.addEventListener("click", () => {
	showPlaylistList("Open Playlist", null)
})

homePageVideos = fullVideoList;
shuffle(homePageVideos);
videoGridLoad(homePage, homePageVideos);


