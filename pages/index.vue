<template>
  <div class="page-index">
  <Header />
  <siteHero />
  
 
  <div class="gradient-bg"></div>
  
  </div>
                
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Header from '~/components/Header.vue'
import SiteHero from '~/components/siteHero.vue'
import NossoProcesso from '~/components/nossoProcesso.vue'
import HiringCall from '~/components/hiringCall.vue'
import Testimonials from '~/components/testimonials.vue'
import SiteFooter from '~/components/siteFooter.vue'


export default {
  components: {
    Header,
    SiteHero,
    NossoProcesso,
    HiringCall,
    Testimonials,
    SiteFooter,


  }
}
</script>

<style>
.container {}
  /* @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */

/* minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0; }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal; }

ul {
  list-style: none; }

button,
input,
select,
textarea {
  margin: 0; }

html {
  box-sizing: border-box; }

*,
*:before,
*:after {
  box-sizing: inherit; }

img,
embed,
iframe,
object,
audio,
video {
  height: auto;
  max-width: 100%; }

iframe {
  border: 0; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

td,
th {
  padding: 0;
  text-align: left; }

@font-face {
  font-family: 'Atlas Grotesk';
  src: url("/static/fonts/AtlasGrotesk-Regular-Web.woff2") format("woff2"), url("/static/fonts/AtlasGrotesk-Regular-Web.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal; }

@font-face {
  font-family: 'Atlas Grotesk';
  src: url("/static/fonts/AtlasGrotesk-RegularItalic-Web.woff2") format("woff2"), url("/static/fonts/AtlasGrotesk-RegularItalic-Web.woff") format("woff");
  font-weight: normal;
  font-style: italic;
  font-stretch: normal; }

@font-face {
  font-family: 'Atlas Grotesk';
  src: url("/static/fonts/AtlasGrotesk-Medium-Web.woff2") format("woff2"), url("/static/fonts/AtlasGrotesk-Medium-Web.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-stretch: normal; }

@font-face {
  font-family: 'Atlas Grotesk';
  src: url("/static/fonts/AtlasGrotesk-MediumItalic-Web.woff2") format("woff2"), url("/static/fonts/AtlasGrotesk-MediumItalic-Web.woff") format("woff");
  font-weight: bold;
  font-style: italic;
  font-stretch: normal; }

@font-face {
  font-family: 'GT Alpina';
  src: url("/static/fonts/GT-Alpina-Regular-Beta-v5.eot");
  src: url("/static/fonts/GT-Alpina-Regular-Beta-v5.eot?#iefix") format("embedded-opentype"), url("/static/fonts/GT-Alpina-Regular-Beta-v5.woff2") format("woff2"), url("/static/fonts/GT-Alpina-Regular-Beta-v5.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal; }

@font-face {
  font-family: 'GT Alpina';
  src: url("/static/fonts/GT-Alpina-Bold-Beta-v5.eot");
  src: url("/static/fonts/GT-Alpina-Bold-Beta-v5.eot?#iefix") format("embedded-opentype"), url("/static/fonts/GT-Alpina-Bold-Beta-v5.woff2") format("woff2"), url("/static/fonts/GT-Alpina-Bold-Beta-v5.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-stretch: normal; }

body {
  background-color: #fff;
  color: #192547;
  font-family: 'Atlas Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased; }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'GT Alpina', serif;
  font-weight: normal;
  color: #192547; }

strong {
  font-weight: bold; }

p a,
li a {
  color: #2e4aa8; }
  p a:hover,
  li a:hover {
    color: #192547; }

::selection {
  background: #203066;
  color: #fff; }

.h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  letter-spacing: -0.05em;
  color: #192547; }
  @media only screen and (max-width: 800px) {
    .h1 {
      font-size: 3rem; } }
  @media only screen and (min-width: 1280px) {
    .h1 {
      font-size: 4.5rem; } }

.h2 {
  font-size: 3rem;
  line-height: 110%;
  letter-spacing: -0.05em;
  color: #192547; }
  @media only screen and (max-width: 800px) {
    .h2 {
      font-size: 2rem; } }
  .h2.centered {
    margin: auto;
    text-align: center; }

.h3 {
  font-size: 2rem;
  line-height: 1.2; }
  @media only screen and (max-width: 800px) {
    .h3 {
      font-size: 1.5rem; } }

.copy .h2 {
  margin-bottom: 2rem; }
  @media only screen and (max-width: 800px) {
    .copy .h2 {
      margin-bottom: 1.5rem; } }

.copy .h3 {
  margin-bottom: 1.5rem; }
  @media only screen and (max-width: 800px) {
    .copy .h3 {
      margin-bottom: 1rem; } }

.copy p {
  color: #192547;
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1.5rem; }
  .copy p:last-child {
    margin-bottom: 0; }
  @media only screen and (max-width: 800px) {
    .copy p {
      font-size: 1rem; } }

.hero .copy {
  max-width: 38.75rem; }
  .hero .copy .h1 {
    margin-bottom: 2rem; }
  .hero .copy p {
    margin-bottom: 3.25rem; }
    @media only screen and (max-width: 800px) {
      .hero .copy p {
        font-size: 1.125rem; } }
    @media only screen and (min-width: 1280px) {
      .hero .copy p {
        font-size: 1.25rem; } }

.hero.centered .copy {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto; }
  .hero.centered .copy .h1,
  .hero.centered .copy p {
    text-align: center; }

.wrapper {
  margin: auto;
  max-width: 1280px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: 100%; }
  @media only screen and (max-width: 800px) {
    .wrapper {
      padding-left: 1.5rem;
      padding-right: 1.5rem; } }

.page-about {
  background-color: #fff3ad;
  position: relative; }

.object {
  position: absolute; }
  .object.yellow {
    right: 10vw;
    top: 25%;
    width: 120px; }
    @media only screen and (max-width: 1380px) {
      .object.yellow {
        right: 3vw; } }
  .object.blue {
    left: 10vw;
    top: 30%;
    width: 145px; }
    @media only screen and (max-width: 1380px) {
      .object.blue {
        left: 3vw; } }
  .object.coffee {
    right: 10vw;
    top: 40%;
    width: 126px; }
    @media only screen and (max-width: 1380px) {
      .object.coffee {
        right: 3vw; } }
  .object.red {
    right: 10vw;
    top: 55%;
    width: 110px; }
    @media only screen and (max-width: 1380px) {
      .object.red {
        right: 3vw; } }
  @media only screen and (max-width: 800px) {
    .object {
      opacity: 0.2; } }

.hero-about {
  background: #203066;
  display: flex;
  height: 100vh; }
  .hero-about .h1 {
    color: #fff; }
  .hero-about p {
    color: #e8eeff; }

.section-about {
  padding: 10rem 0; }
  .section-about.white {
    background-color: white; }
  .section-about.yellow {
    background-color: #fff3ad; }
  @media only screen and (max-width: 800px) {
    .section-about {
      padding: 6rem 0; } }
  .section-about .step {
    margin-bottom: 15rem; }
    @media only screen and (max-width: 800px) {
      .section-about .step {
        margin-bottom: 10rem; } }
    .section-about .step.last {
      margin-bottom: 0; }
  .section-about .copy {
    align-items: center;
    display: flex;
    flex-direction: column; }
    .section-about .copy .h2,
    .section-about .copy p {
      text-align: center; }
    .section-about .copy .h2 {
      max-width: 32.5rem; }
    .section-about .copy p {
      max-width: 38.75rem; }

.page-index {
  overflow-x: hidden;
  background-color: #f4f5fd; }
  .page-index .gradient-bg {
    margin-top: 20rem;
    background: linear-gradient(180deg, #f1f5fe 0%, #f3f5fa 46.88%, #faf7e3 74.29%, #f4eec6 100%); }
  .page-index .hr-nag {
    margin-bottom: 20rem; }
    @media only screen and (max-width: 800px) {
      .page-index .hr-nag {
        margin-bottom: 10rem; } }

.page-product {
  background-color: #fff3ad; }

.hero-product {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #fafbfd 0%, #f0f3f6 100%);
  overflow: hidden; }
  .hero-product .wrapper {
    position: relative; }
  @media only screen and (min-width: 1280px) {
    .hero-product .copy {
      max-width: 35.25rem; } }
  .hero-product .copy p {
    margin: 2rem 0 3.25rem; }
  .hero-product .visual {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 4rem; }
    @media only screen and (max-width: 800px) {
      .hero-product .visual {
        display: block;
        margin-bottom: 2rem; } }
    @media only screen and (min-width: 1280px) {
      .hero-product .visual {
        align-items: center;
        display: flex;
        height: 100%;
        left: 42.75rem;
        margin-bottom: 0;
        position: absolute;
        top: 0; } }
    .hero-product .visual img {
      max-width: 818px;
      width: 100%; }
      @media only screen and (max-width: 800px) {
        .hero-product .visual img {
          width: 818px; } }
      @media only screen and (min-width: 1280px) {
        .hero-product .visual img {
          height: 320px;
          width: 818px; } }
  @media only screen and (max-width: 800px) {
    .hero-product {
      height: auto;
      padding: 9.25rem 0 5rem;
      flex-direction: column;
      align-items: flex-start; } }

.product-section {
  overflow: hidden; }
  .product-section .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-bottom: 9rem;
    padding-top: 9rem; }
    @media only screen and (max-width: 800px) {
      .product-section .wrapper {
        align-items: flex-start;
        flex-direction: column;
        padding-bottom: 6rem;
        padding-top: 6rem; } }
  .product-section .copy {
    max-width: 28.75rem;
    margin-right: 3.5rem; }
    @media only screen and (max-width: 800px) {
      .product-section .copy {
        margin: 0 0 3rem;
        max-width: 38.75rem; } }
    @media only screen and (min-width: 1280px) {
      .product-section .copy {
        margin-right: 5rem; } }
  .product-section .visual img {
    display: block;
    width: 100%; }
  .product-section .visual .img_together {
    max-width: 649px; }
  .product-section .visual .img_quick {
    max-width: 622px; }
  .product-section .visual .img_insights {
    max-width: 733px; }
  .product-section .visual .img_knowledgeable {
    max-width: 599px; }
  .product-section .visual .img_loop {
    max-width: 484px; }
  .product-section.alternate {
    background-color: #f4f6fb; }
    .product-section.alternate .wrapper {
      display: block; }
    .product-section.alternate .copy {
      display: flex;
      margin: 0 0 2.5rem;
      max-width: 100%; }
      @media only screen and (max-width: 800px) {
        .product-section.alternate .copy {
          display: block;
          margin-bottom: 2rem; } }
      .product-section.alternate .copy h2 {
        flex: 1;
        margin: 0 5rem 0 0; }
        @media only screen and (max-width: 800px) {
          .product-section.alternate .copy h2 {
            margin: 0 0 1.5rem 0; } }
      .product-section.alternate .copy p {
        flex: 1;
        max-width: 38.75rem; }

.cookie-banner {
  align-items: center;
  background: rgba(255, 255, 255, 0.97);
  bottom: 0;
  box-shadow: 0 -2px 4px rgba(36, 50, 86, 0.06), 0 -4px 14px rgba(36, 50, 86, 0.1);
  color: #192547;
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  left: 0;
  line-height: 1.5;
  padding: 1rem;
  position: fixed;
  right: 0;
  z-index: 50; }
  .cookie-banner .close {
    background-color: #203066;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin-left: 20px;
    padding: 4px 16px; }
    .cookie-banner .close:hover {
      background-color: #192547; }

.reasons {
  position: relative;
  z-index: 1;
  background-color: #f4f5fd; }
  .reasons .reason {
    position: fixed;
    z-index: 1;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 48px; }
    @media only screen and (max-width: 800px) {
      .reasons .reason {
        flex-direction: column;
        padding: 3rem 1.5rem; } }
  .reasons .illustration {
    margin-right: 3.5rem; }
    @media only screen and (max-width: 800px) {
      .reasons .illustration {
        margin: 0 0 1.5rem 0; } }
    @media only screen and (min-width: 1280px) {
      .reasons .illustration {
        margin-right: 4.5rem; } }
  .reasons .copy {
    max-width: 28.75rem; }
    @media only screen and (max-width: 800px) {
      .reasons .copy {
        max-width: 38.75rem; } }

section.show {
  margin-bottom: 20rem;
  position: relative; }
  @media only screen and (max-width: 800px) {
    section.show {
      margin-bottom: 10rem; } }
  section.show .h2 {
    margin-bottom: 7.5rem;
    max-width: 38.75rem; }
    @media only screen and (max-width: 800px) {
      section.show .h2 {
        margin-bottom: 3rem; } }
  section.show .window-wrapper {
    margin: 0 auto;
    position: relative; }
  section.show .arrow {
    position: absolute; }
    @media only screen and (max-width: 800px) {
      section.show .arrow {
        display: none; } }
    section.show .arrow:nth-child(1) {
      top: -90px;
      left: 0; }
    section.show .arrow:nth-child(2) {
      top: -90px;
      right: 0;
      transform: rotateY(-180deg); }
    section.show .arrow:nth-child(3) {
      bottom: -90px;
      right: 0;
      transform: rotateX(180deg) rotateY(180deg); }
    section.show .arrow:nth-child(4) {
      bottom: -90px;
      left: 0;
      transform: rotateX(-180deg); }
  section.show .big-image {
    margin: auto; }
    @media only screen and (max-width: 800px) {
      section.show .big-image {
        width: 600px; } }
    section.show .big-image img {
      border-radius: 15px;
      box-shadow: 0px 7px 14px rgba(36, 50, 86, 0.1);
      display: block;
      width: 100%; }

.tab-section {
  overflow: hidden;
  width: 100%; }
  .tab-section .wrapper {
    padding-bottom: 9rem;
    padding-top: 9rem; }
    @media only screen and (max-width: 800px) {
      .tab-section .wrapper {
        padding-bottom: 6rem;
        padding-top: 6rem; } }
    .tab-section .wrapper .content {
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0px 7px 14px rgba(36, 50, 86, 0.1);
      will-change: transform;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0); }
      @media only screen and (max-width: 460px) {
        .tab-section .wrapper .content {
          width: 600px; } }
  .tab-section .h2 {
    margin-bottom: 4rem; }
    @media only screen and (max-width: 800px) {
      .tab-section .h2 {
        margin-bottom: 2rem; } }
  .tab-section nav.tabs {
    display: flex;
    margin-bottom: 2.5rem; }
    .tab-section nav.tabs .item {
      color: #203066;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      font-size: 1.25rem;
      color: rgba(25, 37, 71, 0.4);
      font-family: 'GT Alpina', serif;
      margin-right: 2.5rem;
      padding: 0.25rem 0;
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1); }
      @media only screen and (max-width: 800px) {
        .tab-section nav.tabs .item {
          margin-right: 1.5rem; } }
      @media only screen and (max-width: 460px) {
        .tab-section nav.tabs .item {
          font-size: 1rem; } }
      .tab-section nav.tabs .item:hover, .tab-section nav.tabs .item.selected {
        color: #192547; }
      .tab-section nav.tabs .item.selected {
        border-bottom-color: #192547; }
      .tab-section nav.tabs .item:last-child {
        margin-right: 0; }
  .tab-section .description {
    font-size: 1rem;
    margin-bottom: 3rem; }

.tab-slider {
  height: 100%;
  display: flex;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); }
  .tab-slider img {
    display: block; }

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem 0;
  z-index: 15;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); }
  .header.filled {
    box-shadow: 2px 4px 4pxrgba 36, 50, 86, 0.02;
    background-color: #fdfeff;
    padding: 1rem 0; }
    @media only screen and (max-width: 800px) {
      .header.filled {
        padding: 1.5rem 0; } }
  .header.hide {
    transform: translateY(-100%); }
  .header.white .nav-item {
    color: rgba(255, 255, 255, 0.65); }
    .header.white .nav-item.active, .header.white .nav-item:hover {
      color: #fff; }
  .header.white.filled {
    background: #203066; }
  .header .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between; }
  .header .logo img {
    display: block; }
  @media only screen and (max-width: 800px) {
    .header .logo {
      width: 72px; } }
  @media only screen and (max-width: 800px) {
    .header .main-navigation {
      display: flex; } }
  .header .nav-item {
    color: #7a87a1;
    font-size: 1.125rem;
    margin-right: 3.75rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1); }
    .header .nav-item.active, .header .nav-item:hover {
      color: #192547; }
  @media only screen and (max-width: 800px) {
    .header .button.small {
      font-size: 14px; } }
  .header .burger {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-left: 1.5rem; }
  @media only screen and (max-width: 800px) {
    .header {
      padding: 1.5rem 0; } }

.mobile-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e8eeff;
  z-index: 30;
  padding: 34px 24px;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 24px 60px rgba(25, 37, 71, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.09); }
  .mobile-nav .top {
    display: flex;
    align-items: center;
    justify-content: space-between; }
  .mobile-nav .main-mobile-navigation {
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; }
    .mobile-nav .main-mobile-navigation .nav-item {
      font-weight: bold;
      font-size: 18px;
      line-height: 140%;
      color: #192547;
      margin-bottom: 24px;
      text-decoration: none; }
    .mobile-nav .main-mobile-navigation .button {
      margin-top: 24px; }
  .mobile-nav.show {
    transform: none; }
  .mobile-nav.hide {
    transform: translateX(100%); }

.button {
  background-color: #203066;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0px 0px 10x rgba(36, 50, 86, 0);
  transition: box-shadow 1s cubic-bezier(0.19, 1, 0.22, 1); }
  .button.big {
    font-size: 24px;
    padding: 17px 27px; }
    @media only screen and (max-width: 800px) {
      .button.big {
        font-size: 1.125rem; } }
  .button.small {
    font-size: 1.125rem;
    padding: 12px 16px; }
    @media only screen and (max-width: 800px) {
      .button.small {
        font-weight: bold; } }
  .button:hover {
    box-shadow: 0px 4px 14px rgba(36, 50, 86, 0.35); }
  .button.white {
    background-color: #ffffff;
    color: #192547; }

.page {
  min-height: 100vh; }

.page.static {
  background-color: #fff;
  padding-top: 16rem; }
  .page.static:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
    background-image: linear-gradient(180deg, #f1f7fd 0%, #ffffff 100%);
    z-index: 4; }
  .page.static .content {
    position: relative;
    z-index: 5;
    max-width: 50rem;
    margin: 0 auto 20rem; }
    .page.static .content h1 {
      font-size: 48px;
      line-height: 110%;
      margin-bottom: 16px; }
    .page.static .content .subline {
      font-size: 18px;
      line-height: 150%;
      margin-bottom: 128px; }
      @media only screen and (max-width: 800px) {
        .page.static .content .subline {
          margin-bottom: 64px; } }
    .page.static .content p {
      margin-bottom: 24px;
      font-size: 16px;
      line-height: 1.5; }
    .page.static .content h2 {
      font-size: 32px;
      line-height: 110%;
      margin: 64px 0 32px; }
    .page.static .content h3 {
      font-size: 24px;
      line-height: 110%;
      margin: 32px 0 16px; }
    .page.static .content ol,
    .page.static .content ul {
      margin-bottom: 24px;
      padding: 0 0 0 20px; }
    .page.static .content li {
      font-size: 16px;
      line-height: 1.5;
      padding-left: 5px;
      list-style: disc; }
    .page.static .content ol li {
      list-style-type: decimal;
      margin: 0 1rem 1.5rem 0; }
    .page.static .content li ol {
      margin-top: 1.5rem; }
    .page.static .content li ol li {
      list-style-type: lower-latin; }
  @media only screen and (max-width: 800px) {
    .page.static {
      padding-top: 120px; } }

.hero-index {
  display: flex;
  position: relative;
  z-index: 2;
  height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, rgba(244, 245, 253, 0) 100%); }
  @media only screen and (max-width: 460px) {
    .hero-index {
      height: auto; } }
  .hero-index .wrapper {
    padding-bottom: 4rem;
    padding-top: 6rem; }
    @media only screen and (max-width: 800px) {
      .hero-index .wrapper {
        padding-bottom: 3rem;
        padding-top: 5rem; } }
    @media only screen and (max-width: 460px) {
      .hero-index .wrapper {
        padding-bottom: 4rem;
        padding-top: 10rem; } }
  .hero-index .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9; }
    .hero-index .background img {
      opacity: 0; }
      .hero-index .background img:nth-child(1) {
        position: absolute;
        left: 15vw;
        top: 8vh;
        width: 200px; }
        @media only screen and (min-width: 1660px) {
          .hero-index .background img:nth-child(1) {
            left: 25vw; } }
        @media only screen and (max-width: 800px) {
          .hero-index .background img:nth-child(1) {
            width: 100px; } }
      .hero-index .background img:nth-child(2) {
        position: absolute;
        left: 8vw;
        top: 68vh;
        width: 120px; }
        @media only screen and (min-width: 1660px) {
          .hero-index .background img:nth-child(2) {
            left: 22vw; } }
        @media only screen and (max-width: 800px) {
          .hero-index .background img:nth-child(2) {
            width: 60px; } }
        @media only screen and (max-width: 460px) {
          .hero-index .background img:nth-child(2) {
            left: 2vh;
            top: 74vh; } }
      .hero-index .background img:nth-child(3) {
        position: absolute;
        right: 10vw;
        top: 50vh;
        width: 120px; }
        @media only screen and (min-width: 1660px) {
          .hero-index .background img:nth-child(3) {
            right: 20vw; } }
        @media only screen and (max-width: 800px) {
          .hero-index .background img:nth-child(3) {
            width: 60px; } }
        @media only screen and (max-width: 460px) {
          .hero-index .background img:nth-child(3) {
            right: 6vw;
            top: 70vh; } }
  .hero-index .copy {
    max-width: 37.5rem;
    position: relative;
    z-index: 10; }

.departments {
  margin-bottom: 20rem;
  position: relative; }
  @media only screen and (max-width: 800px) {
    .departments {
      margin-bottom: 10rem; } }
  .departments .h2 {
    margin-bottom: 5rem;
    max-width: 38.75rem; }
  .departments .cards {
    align-items: stretch;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 5; }
    @media only screen and (max-width: 800px) {
      .departments .cards {
        flex-direction: column; } }
    .departments .cards .elevated-card {
      flex: 1 1 0;
      margin-right: 3rem; }
      .departments .cards .elevated-card:last-child {
        margin-right: 0; }
      @media only screen and (min-width: 1280px) {
        .departments .cards .elevated-card {
          margin-right: 5rem; } }
      @media only screen and (max-width: 800px) {
        .departments .cards .elevated-card {
          margin: 0 0 1.5rem; } }
  .departments .coffee {
    content: url("/static/images/coffee.png");
    position: absolute;
    bottom: -220px;
    right: -100px;
    width: 280px;
    z-index: 4; }
    @media only screen and (max-width: 800px) {
      .departments .coffee {
        display: none; } }

.elevated-card {
  background: #ffffff;
  box-shadow: 0px 16px 40px rgba(25, 37, 71, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.03);
  border-radius: 32px;
  padding: 2rem;
  position: relative;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1); }
  .elevated-card:hover {
    transform: scale(1.02) !important;
    box-shadow: 0px 24px 60px rgba(25, 37, 71, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.09); }
  @media only screen and (min-width: 1280px) {
    .elevated-card {
      padding: 3.5rem; } }
  @media only screen and (max-width: 800px) {
    .elevated-card {
      padding: 40px; } }
  .elevated-card .h3,
  .elevated-card p {
    position: relative;
    z-index: 5; }
  @media only screen and (min-width: 1280px) {
    .elevated-card .h3 {
      margin-bottom: 2.5rem; } }
  .elevated-card p {
    color: #7a87a1;
    font-size: 1rem; }
  .elevated-card.straight:after {
    content: url("/static/icons/line-straight.svg");
    position: absolute;
    top: 66px;
    left: 32px;
    z-index: 4; }
    @media only screen and (min-width: 1280px) {
      .elevated-card.straight:after {
        top: 90px;
        left: 56px; } }
    @media only screen and (max-width: 800px) {
      .elevated-card.straight:after {
        top: 64px;
        left: 37px;
        width: 20px; } }
  .elevated-card.squiggle:after {
    content: url("/static/icons/line-squiggle.svg");
    position: absolute;
    top: 70px;
    left: 32px;
    z-index: 4; }
    @media only screen and (min-width: 1280px) {
      .elevated-card.squiggle:after {
        top: 96px;
        left: 56px; } }
    @media only screen and (max-width: 800px) {
      .elevated-card.squiggle:after {
        left: 39px; } }
  .elevated-card.circle:after {
    content: url("/static/icons/line-circle.svg");
    position: absolute;
    top: 30px;
    left: 20px;
    z-index: 4; }
    @media only screen and (min-width: 1280px) {
      .elevated-card.circle:after {
        top: 52px;
        left: 42px; } }
    @media only screen and (max-width: 800px) {
      .elevated-card.circle:after {
        top: 32px;
        left: 22px; } }

.testimonials {
  margin-bottom: 20rem; }
  @media only screen and (max-width: 800px) {
    .testimonials {
      margin-bottom: 10rem; } }
  .testimonials .h2 {
    margin-bottom: 6rem; }
    @media only screen and (max-width: 800px) {
      .testimonials .h2 {
        margin-bottom: 4rem; } }
  .testimonials .logos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around; }
    .testimonials .logos img {
      max-width: 186px;
      margin: 0 2rem 4rem; }
      @media only screen and (max-width: 800px) {
        .testimonials .logos img {
          margin: 0 1.5rem 4rem;
          max-width: 186px; } }

.hr-nag p {
  max-width: 30rem; }

.hr-nag.center {
  align-items: center;
  display: flex;
  flex-direction: column; }
  .hr-nag.center h2,
  .hr-nag.center p {
    text-align: center; }

.footer {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1280px;
  padding: 5.5rem 2.5rem;
  width: 100%; }
  .footer .main {
    display: flex;
    align-items: center; }
    @media only screen and (max-width: 1080px) {
      .footer .main {
        flex-direction: column;
        align-items: flex-start; } }
    .footer .main .logo {
      display: block;
      width: 88px; }
      @media only screen and (max-width: 1080px) {
        .footer .main .logo {
          margin: 0 0 32px 0; } }
    .footer .main .footer-nav {
      display: flex;
      align-items: center; }
      @media only screen and (max-width: 1080px) {
        .footer .main .footer-nav {
          flex-direction: column;
          align-items: flex-start; } }
      .footer .main .footer-nav a {
        display: block;
        font-size: 1.125rem;
        line-height: 1.4;
        color: #192547;
        margin-left: 3.5rem;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1); }
        .footer .main .footer-nav a:hover {
          color: rgba(25, 37, 71, 0.6); }
        @media only screen and (max-width: 800px) {
          .footer .main .footer-nav a {
            font-size: 0.875rem; } }
        @media only screen and (max-width: 1080px) {
          .footer .main .footer-nav a {
            margin: 0 0 24px 0; } }
  .footer .off .social-nav {
    margin-bottom: 1.25rem; }
    .footer .off .social-nav a {
      margin-right: 1.5rem; }
      .footer .off .social-nav a:last-child {
        margin: 0; }
      @media only screen and (max-width: 800px) {
        .footer .off .social-nav a {
          margin-right: 16px; } }
      .footer .off .social-nav a img {
        height: 36px;
        width: 36px;
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        border-radius: 18px; }
        .footer .off .social-nav a img:hover {
          cursor: pointer;
          transform: scale(1.1);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); }
  .footer .off .legal-nav {
    align-items: flex-start;
    display: flex;
    flex-direction: column; }
    .footer .off .legal-nav a {
      color: rgba(25, 37, 71, 0.6);
      display: block;
      font-size: 1rem;
      line-height: 1.4;
      margin-bottom: 0.5rem;
      opacity: 0.8;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1); }
      .footer .off .legal-nav a:hover {
        color: #192547; }
      @media only screen and (max-width: 800px) {
        .footer .off .legal-nav a {
          font-size: 0.875rem;
          margin: 0.5rem 0 1rem; } }
  @media only screen and (max-width: 800px) {
    .footer {
      padding: 2rem 1.5rem; } }

.triple-feature {
  background-color: #203066; }
  .triple-feature .wrapper {
    padding-bottom: 9rem;
    padding-top: 9rem; }
    @media only screen and (max-width: 800px) {
      .triple-feature .wrapper {
        padding-bottom: 6rem;
        padding-top: 6rem; } }
  .triple-feature h2 {
    max-width: 30rem;
    margin-bottom: 5rem;
    font-size: 3rem;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: #fff; }
    @media only screen and (max-width: 800px) {
      .triple-feature h2 {
        font-size: 2.5rem; } }
  .triple-feature .features {
    display: flex;
    justify-content: space-between; }
    @media only screen and (max-width: 800px) {
      .triple-feature .features {
        flex-direction: column; } }
    .triple-feature .features .feature {
      flex: 1 1 0;
      margin-right: 3rem; }
      @media only screen and (max-width: 800px) {
        .triple-feature .features .feature {
          margin: 0 0 4rem;
          max-width: 38rem; }
          .triple-feature .features .feature:last-child {
            margin: 0; } }
      .triple-feature .features .feature .h3 {
        color: #fff; }
      .triple-feature .features .feature p {
        color: #fff; }
      .triple-feature .features .feature:last-child {
        margin-right: 0; }


</style>
