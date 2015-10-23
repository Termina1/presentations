import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

class LI extends React.Component {
  render() {
    let cnt = <ListItem>{this.props.children}</ListItem>;
    if (this.props.i) {
      return <Appear>{cnt}</Appear>;
    }
    return cnt;
  }
}

class ML extends React.Component {
  render() {
    return <List style={{marginTop: 40}}>{this.props.children}</List>
  }
}

class MH extends React.Component {
  render() {
    return <Link target="_blank" href={this.props.href}>{this.props.href}</Link>
  }
}

import preloader from "../src/utils/preloader";

const images = {
  octocat: require("./images/baracktocat.jpg"),
  paper: require('./images/paper_logo_inverted.svg'),
  vk: require('./images/vk.svg'),
  hack: require('./images/hack.png'),
  types: require('./images/types.jpg'),
  choose: require('./images/vybor_3.jpg'),
  php7: require('./images/php7.jpg')
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
          <Heading size={2}>Нет нормальной системы типов</Heading>
        </Slide>
        <Slide transition="zoom">
          <Image src={images.types} />
        </Slide>
        <Slide>
          <Heading size={2}>Hack & HipHop VM</Heading>
          <Image src={images.hack} style={{marginTop: 70}}/>
        </Slide>
        <Slide>
          <Heading size={2}>Что такое Hack?</Heading>
            <List style={{marginTop: 40}}>
              <ListItem>Hack Typechecker</ListItem>
              <ListItem>HHVM</ListItem>
            </List>
        </Slide>
        <Slide>
          <Heading size={2}>Typechecker</Heading>
          <List style={{marginTop: 40}}>
            <ListItem>Не входит в состав HHVM</ListItem>
            <ListItem>Инкрементная проверка</ListItem>
            <ListItem>Легко интегрируется в современные редакторы</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>Система типов</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/12.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <ML>
            <LI>«Мягкая» система типов</LI>
            <LI i>3 режима работы typechecker (Partial, Decl, Srict)</LI>
            <LI i>int, string, bool, array</LI>
            <LI i>void, mixed</LI>
            <LI i>Nullable types</LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={4}>Nullable типы</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/14.nullable.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <ML>
            <LI>Collections (Map, Vector, etc.)</LI>
            <LI i>Generics</LI>
            <LI i>Functions</LI>
            <LI i>Type Aliases</LI>
            <LI i>Generators, Awaitable</LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={4}>Async</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/16.async.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading size={4}>Генераторы</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/17.generator.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading size={4}>Анонимные функции</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/18.lambda.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading>{'<h1>'}XHP{'</h1>'}</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Пример:</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/19.xhp.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading size={4}>Это вообще нормально?</Heading>
          <ML>
            <LI i>Да</LI>
            <LI i>Защита от XSS по умолчанию</LI>
            <LI i>Валидация HTML-дерева на стадии разбора кода</LI>
            <LI i>Компоненты!</LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={4}>Пример компонента</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/21.component.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading size={4}>Пример асинхронного компонента</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/22.component_async.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading size={2}>Компоненты лучше шаблонов!</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Structure typing (children, category)</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Зачем?</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Жизненный опыт</Heading>
          <CodePane
            lang="php"
            source={require("raw!./code/26.hhvm.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <ML>
            <LI>Компонентный подход — это круто</LI>
            <LI i>Хорошо работает в связке с React на фронте</LI>
            <LI i>Асинхронный рендеринг и асинхронный код</LI>
            <LI i>Защита от XSS по дефолту</LI>
            <LI i>Это в 2 раза быстрее текущей версии php</LI>
            <LI i>Можно использовать уже сейчас и не потерять совместимость</LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={2} style={{marginBottom: 20}}>Выбор?</Heading>
          <Image src={images.choose} />
        </Slide>
        <Slide>
          <Heading size={2} style={{marginBottom: 20}}>Выбор?</Heading>
          <ML>
            <LI>PHP 7</LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={2} style={{marginBottom: 20}}>Говорят он будет даже быстрее...</Heading>
          <Image src={images.php7} />
        </Slide>
        <Slide>
          <Heading size={2}>Еще</Heading>
          <ML>
            <LI>Какая-то система типов (Scalar/return type hints)</LI>
            <LI i>Космический корабль ({'<=>'}) и ??</LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={2}>KPHP</Heading>
          <MH href="https://github.com/vk-com/kphp-kdb"/>
        </Slide>
        <Slide>
          <Heading size={2}>Минусы HHVM</Heading>
          <ML>
            <LI>Работает только на Linux (говорят еще на OS X)</LI>
            <LI>Есть процесс разогрева JIT</LI>
            <LI>Есть несовместимости с PHP</LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={2}>Ссылки</Heading>
          <div style={{fontSize: 10}}>
            <ML>
              <LI>1. react-php <MH href="http://reactphp.org/"/></LI>
              <LI>2. Релиз HipHop <MH href="https://code.facebook.com/posts/522783257792850/hiphop-for-php-move-fast" /></LI>
              <LI>3. Релиз HHVM <MH href="https://code.facebook.com/posts/495167483903373/the-hiphop-virtual-machine/"/></LI>
              <LI>4. Блог про XHP <MH href="http://codebeforethehorse.tumblr.com/" /></LI>
              <LI>5. Transpiler Hack -> PHP <MH href="https://code.facebook.com/posts/398235553660954/announcing-the-hack-transpiler/" /></LI>
              <LI>6. PHP 7 performance <MH href="http://talks.php.net/oz15#/"/></LI>
              <LI>7. KPHP <MH href="https://github.com/vk-com/kphp-kdb"/></LI>
              <LI>8. Пост о Wordpress на HHVM <MH href="http://bit.ly/wphhvm"/></LI>
            </ML>
          </div>
        </Slide>
        <Slide>
          <Heading size={2}>Пишите</Heading>
          <ML>
            <LI>VK: Вячеслав Шебанов <MH href="https://vk.com/bysoul" /></LI>
            <LI>Twitter: <Link href="https://twitter.com/thought_sync">@thought_sync</Link></LI>
            <LI>Github: <Link href="https://github.com/Termina1">Termina1</Link></LI>
          </ML>
        </Slide>
        <Slide>
          <Heading size={2}>Вопросы?</Heading>
        </Slide>
      </Deck>
    );
  }
}
