# Expo BoilerPlate

차후 Expo로 프로젝트 진행시 재사용 가능한 보일러플레이트.

## styled-components & typesync

스타일을 지정 할 라이브러리로 styled-components를 선택했으며, typescript를 쓰면서 라이브러리의 타입을 쉽게 package.json에 추가해주는 typesync 라이브러리를 추가했다.

### package.json에 typesync 커맨드 추가

```
"scripts": {
  ...,
  "typesync": "typesync && yarn"
}
```

## constants추가

상수 값을 모아두는 constants 폴터를 생성했다. 
기본적으로 theme정도만 만들어놓고 나중에 재활용 할 예정이다.

## custom hooks 추가

최근프로젝트에서 추가한 custom hooks(useBrowserTheme, useIntersectionObserver)를 hooks 폴더에 추가 했다.

## style관련 추가

styled-component에서 쓰일 mixins, values를 styles폴더에 추가했다.

## components 폴더추가

컴포넌트를 모아둘 components폴더를 추가했다.

## alias path 추가

src, components, constants, hooks, styles 폴더들의 alias를 추가했다.

- src : ~
- components : ~components
- constants : ~constants
- hooks : ~hooks
- styles : ~styles

## web 정적 파일을 위해 web폴더 추가
