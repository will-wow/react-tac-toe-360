import React from "react";
import { AppRegistry, View } from "react-360";

import MainMenu from "./src/main-menu/MainMenu";
import TicTacToe from "./src/tic-tac-toe/TicTacToe";

class ReactTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  startGame = () => this.setState({ playing: true });
  endGame = () => this.setState({ playing: false });

  render() {
    const { playing } = this.state;
    return (
      <View>
        {!playing ? <MainMenu onStart={this.startGame} /> : <TicTacToe />}
      </View>
    );
  }
}

export default ReactTacToe;

AppRegistry.registerComponent("ReactTacToe", () => ReactTacToe);

// export default class Hello360 extends React.Component {
//   render() {
//     return (
//       <View style={styles.panel}>
//         <View style={styles.greetingBox}>
//           <Text style={styles.greeting}>
//             Welcome to React 360!!
//           </Text>
//         </View>
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     width: 1000,
//     height: 600,
//     backgroundColor: 'rgba(255, 255, 255, 0.4)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   greetingBox: {
//     padding: 20,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 2,
//   },
//   greeting: {
//     fontSize: 30,
//   },
// });

// AppRegistry.registerComponent('Hello360', () => Hello360);
