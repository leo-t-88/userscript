// ==UserScript==
// @name        Twitch Picture in Picture Button
// @description Add a Picture in Picture button to twitch streams and videos.
// @version     1.0
// @match       https://www.twitch.tv/*
// @copyright   Leo.t88 - 2023+
// @icon        https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png
// @namespace   https://github.com/leo-t-88/userscript/
// ==/UserScript==

function enterPictureInPicture() {
  document.querySelector("video")
    .requestPictureInPicture()
    .catch(error => {
      console.log(error);
    });
}

function injectPipBtn() {
  try {
    if (document.querySelector("button#_injectPipBtn") !== null) return;

    const actionContainer = document.querySelector(".player-controls__right-control-group");

    if (!actionContainer) {
      return; // Try again later.
    }

    const enterPipBtnDiv = document.createElement("div");
    enterPipBtnDiv.classList.add("sc-AxjAm");
    enterPipBtnDiv.classList.add("ScAttachedTooltipWrapper-v8mg6d-0");
    enterPipBtnDiv.classList.add("dLtTlU");
    enterPipBtnDiv.innerHTML = `
<button title="Picture in picture" id="_injectPipBtn" class="iqiDFi tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-button-icon tw-button-icon--overlay tw-core-button tw-core-button--overlay tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative"><span class="tw-button-icon__icon"><div style="width: 2rem; height: 2rem;"><div class="ScIconLayout-sc-1bgeryd-0 kbOjdP tw-icon"><div class="ScAspectRatio-sc-1sw3lwy-1 dNNaBC tw-aspect"><div class="ScAspectSpacer-sc-1sw3lwy-0 gkBhyN"></div><svg width="100%" height="90%" style="margin: -6px 0px;" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 cMQeyU"><g><path d="M 15.832031 5.832031 L 9.167969 5.832031 L 9.167969 10.832031 L 15.832031 10.832031 Z M 17.5 2.5 L 2.5 2.5 C 1.582031 2.5 0.832031 3.25 0.832031 4.167969 L 0.832031 15.832031 C 0.832031 16.75 1.582031 17.484375 2.5 17.484375 L 17.5 17.484375 C 18.417969 17.484375 19.167969 16.75 19.167969 15.832031 L 19.167969 4.167969 C 19.167969 3.25 18.417969 2.5 17.5 2.5 Z M 17.5 15.839844 L 2.5 15.839844 L 2.5 4.148438 L 17.5 4.148438 Z M 17.5 15.839844 " fill="#fff"/></g></svg></div></div></div></span></button>
<div class="ScAttachedTooltip-v8mg6d-1 jouePo tw-tooltip" data-a-target="tw-tooltip-label" role="tooltip" direction="tw-tooltip--up" title="Picture in Picture></div>
`;

    const insertOffset = actionContainer.childNodes.length - 1;
    actionContainer.insertBefore(enterPipBtnDiv, actionContainer.childNodes[insertOffset]);
    document.querySelector("#_injectPipBtn").addEventListener("click", enterPictureInPicture);

  } catch (err) {
    console.error("Twitch Picture in Picture >> " + err);
  }
}

setInterval(injectPipBtn, 1000);
