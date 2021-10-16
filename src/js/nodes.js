function Nodes({$app, initialState, onClick}) {

  this.onClick = onClick;

  this.render = () => {
    if(this.state.nodes) {
      const nodesTemp = this.state.nodes.map(node => {
        const iconPath = node.type === 'FILE' ? './assets/file.png' : './assets/directory.png'
        return `
          <div class="Node" data-node-id="${node.id}">
            <img src="${iconPath}"/>
            <div>${node.name}</div>
          </div>
        `
      }).join('')

      this.$target.innerHTML = this.state.isRoot ? nodesTemp : `<div class="Node"><img src="/assets/prev.png"></div>${nodesTemp}`
    }

    this.$target.querySelectorAll('.Node').forEach($node => {
      $node.addEventListener('click', (e) => {
        const {nodeId} = e.target.dataset;
        const selectedNode = this.state.nodes.find(node => node.id === nodeId)
        if(selectedNode){
          this.onClick(SelectedNode);
        }
      })
    })
  }
}