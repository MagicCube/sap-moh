import TabPageView from 'bd/view/TabPageView';


export default class BusGroupingTabPageView extends TabPageView {
  metadata = {
    properties: {
      title: { type: 'string', defaultValue: 'Grouping' }
    }
  }

  init() {
    super.init();

    this.addStyleClass('moh-view-busGroupingTabPageView');

    this._initMain();
  }

  _initMain() {
    const $info = $('<div class="info h3">Pilgrim Grouping Information Page</div>');
    this.$container.append($info);

    const _$locBtn = $('<button class="loc">Location</button>');
    _$locBtn.on('click', this._onLocationButtonClick.bind(this));
    const _$delayBtn = $('<button class="delay">Delay Notification</button>');
    _$delayBtn.on('click', this._delayButtonClick.bind(this));

    const $footer = $('<footer />');
    $footer.append(_$locBtn, _$delayBtn);

    this.$container.append($footer);
  }

  _delayButtonClick(e) {
    console.log(e);
  }

  _onLocationButtonClick(e) {
    this.getParent().getParent().putAside();
  }
}
