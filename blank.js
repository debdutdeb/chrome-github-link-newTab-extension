console.log("New tab link loaded..")
for (const className of ["timeline-comment", "minimized-comment"]) {
	for (const block of document.getElementsByClassName(className)) {
		for (const comment of block.getElementsByClassName("edit-comment-hide")) {
			for (const a of comment.getElementsByTagName("a")) {
				a.setAttribute("target", "_blank")
			}
		}
	}
}

