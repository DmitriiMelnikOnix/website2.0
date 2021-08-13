import TestPage1 from "./pages/TestPage";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import { BlogIndex } from "./pages/Blog";
import { BlogOne } from "./pages/Blog/contributingFactorsToFailure";
import { BlogTwo } from "./pages/Blog/kubernetesIsNotAContainerOrchestrator";
import { BlogThree } from "./pages/Blog/launchingFlanksource";

// const prefix = process.env.NODE_ENV === "production" ? "/v2" : "";
const prefix = "/v2";

export const blogRoutes = {
  blogOne: {
    name: "Contributing factors to failure",
    exact: true,
    path: `${prefix}/blog/contributing-factors-to-failure`,
    component: <BlogOne />,
    imgSrc: "/assets/img/control-loop-hero.jpg",
    desc: "Investigating a dataset for common contributing factors to outages."
  },
  blogTwo: {
    name: "Kubernetes is NOT a container orchestrator",
    exact: true,
    path: `${prefix}/blog/kubernetes-is-not-a-container-orchestrator`,
    component: <BlogTwo />,
    imgSrc: "/assets/img/control-loop-hero.jpg",
    desc: "It is a common misconception that Kubernetes is just a container orchestrator, it is so much more."
  },
  blogThree: {
    name: "Launching flanksource",
    exact: true,
    path: `${prefix}/blog/launching-flanksource`,
    component: <BlogThree />,
    imgSrc: "/assets/img/lighthouse_milkyway.jpg",
    desc: "Flanksource launched in January 2020 as a lean-first company focusing exclusively on Kubernetes."
  }
};

export const routes = {
  home: {
    path: `${prefix}/`,
    exact: true,
    component: <Home />
  },
  about: {
    name: "About",
    exact: true,
    path: `${prefix}/about`,
    component: <About />
  },
  services: {
    name: "Services",
    exact: true,
    path: `${prefix}/kubernetes-services`,
    component: <Services />
  },
  openSource: {
    name: "Open Source",
    exact: true,
    path: `${prefix}/open-source`,
    component: <TestPage1 />
  },
  careers: {
    name: "Careers",
    exact: true,
    path: `${prefix}/careers`,
    component: <Careers />
  },
  blog: {
    name: "Blog",
    exact: true,
    path: `${prefix}/blog`,
    component: <BlogIndex />
  },
  ...blogRoutes,
  contact: {
    name: "Contact",
    exact: true,
    path: `${prefix}/contact`,
    component: <TestPage1 />
  }
};

export const routeList = Object.keys(routes);
