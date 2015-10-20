import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

const images = {
  octocat: require("./images/baracktocat.jpg"),
  paper: require('./images/paper_logo_inverted.svg'),
  vk: require('./images/vk.svg'),
  hack: require('./images/hack.png'),
  types: require('./images/types.jpg')
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={800}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Hack
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            как PHP нового поколения
          </Heading>
        </Slide>
        <Slide>
          <Heading style={{"margin-bottom": 50}}>Кто я?</Heading>
          <Image src={images.octocat} width="50%" />
        </Slide>
        <Slide>
          <Layout style={{'align-items': 'center'}}>
            <Fill>
              <Text size={6} style={{"text-align": "right"}}>Сооснователь и технический директор</Text>
            </Fill>
            <Fill>
              <Image src={images.paper} />
            </Fill>
          </Layout>
          <Layout style={{'align-items': 'center', 'margin-top': 50}}>
            <Fill>
              <Text size={6} style={{"text-align": "right"}}>Разработчик</Text>
            </Fill>
            <Fill>
              <Image src={images.vk} width={200}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={2}>Зачем?</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Производительность</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Анонимные функции (синтаксический сахар)</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Поддержка асинхронности из коробки</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Нет системы типов</Heading>
        </Slide>
        <Slide transition="zoom">
          <Image src={images.types} />
        </Slide>
        <Slide>
          <Heading>Hack & HipHop VM</Heading>
          <Image src={images.hack} style={{marginTop: 70}}/>
        </Slide>
      </Deck>
    );
  }
}
