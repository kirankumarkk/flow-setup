import React, {Component} from 'react';


type AccountDrawerProps = {
    accountId: ?string,
  setExchangeRate: (exchangeRate: string) => void,
};

export class AccountDrawer extends Component<AccountDrawerProps> {
    constructor(props: AccountDrawerProps) {
        super(props);
    }


    handleExrateChange(exrate){
        this.props.setExchangeRate(exrate);
    };


    render() {

        return (
            <div>
                ** rendering logic goes here**
            </div>
        );
    }
}
