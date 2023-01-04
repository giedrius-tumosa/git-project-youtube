export default class VideoCard {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    const article = document.createElement("article");
    article.setAttribute("class", "videoCard");
    const figure = document.createElement("figure");
    const videoDuration = document.createElement("span");
    videoDuration.setAttribute("class", "videoDuration");
    videoDuration.append(document.createTextNode(`${this.props.duration}`));
    const thumbNail = document.createElement("img");
    thumbNail.setAttribute("src", `${this.props.videoThumbNail}`);
    thumbNail.setAttribute("width", 250);
    thumbNail.setAttribute("height", "auto");
    thumbNail.setAttribute("alt", "Video thumbnail.");
    article.append(figure);
    figure.append(thumbNail, videoDuration);

    const videoInfoBox = document.createElement("section");
    videoInfoBox.setAttribute("class", "videoInfoBox");
    const channelIcon = document.createElement("figure");
    channelIcon.setAttribute("class", "channelIcon");
    const img = document.createElement("img");
    img.setAttribute("src", `${this.props.channelIconUrl}`);
    img.setAttribute("width", 30);
    img.setAttribute("height", 30);
    img.setAttribute("alt", "Channel icon.");

    article.append(videoInfoBox);
    videoInfoBox.append(channelIcon);
    channelIcon.append(img);

    const textBox = document.createElement("div");
    textBox.setAttribute("class", "textBox");
    videoInfoBox.append(textBox);
    const videoTitle = document.createElement("h3");
    videoTitle.setAttribute("class", "videoTitle");
    videoTitle.append(document.createTextNode(`${this.props.title}`));

    const channelTitle = document.createElement("span");
    channelTitle.setAttribute("class", "channelTitle");
    channelTitle.append(document.createTextNode(`${this.props.channelTitle}`));

    const videoData = document.createElement("span");
    videoData.setAttribute("class", "videoData");
    videoData.append(document.createTextNode(`${this.props.viewCount} · ${this.props.postedTime}`));

    textBox.append(videoTitle, channelTitle, videoData);

  }
}