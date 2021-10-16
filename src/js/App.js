function App($app) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
    selectedFilePath : null
  };

  const breadcrumb = new Breadcrumb({ $app, initialState: this.state.depth });
  const nodes = new Nodes({
    $app,
    initialState: [],
    onClick: (node) => {
      if (node.type === "DIRECTORY") {
        const nextNodes = await request(node.id);
        this.setState({
          ...this.state,
          depth : [...this.state.depth, node],
          nodes : nextNodes
        })
      } else if (node.type === FILE) {

      }
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    breadcrumb.setState(this.state.depth)
    nodes.setState({
      isRoot : this.state.isRoot,
      nodes : this.state.nodes
    })
  }

  const init = async () => {
    try {
      const rootNodes = await request();
      this.setState({
        ...this.state,
        isRoot : true,
        nodes : rootNodes
      })
    } catch(e) {
      console.log(e);
    }
  }
  init();
}
const IMAGE_PATH = 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public';
function ImageView({$app, initialState}) {
  this.state=initialState
  this.$target = document.createElement('div');
  this.$target.className = 'Modal ImageView';
  $app.appendChild(this.$target);
  this.setState = (next) => {
    this.state = next;
    this.render();
  }

  this.render = () => {
    this.$target.innerHTML = `<div class="content">${this.state ? `<img src="${IMAGE_PATH}${this.state}">` : ""}</div>`;
    this.$target.style.display = this.state ? 'block' : 'none';
  }
  this.render();
}