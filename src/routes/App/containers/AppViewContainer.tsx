import {connect} from "react-redux";
import {
  fetchBalance,
  fetchTransaction,
} from "../../../store/global-reducers/data-reducer";
import {switchNet} from "../../../store/global-reducers/url-reducer";
import AppView from "../AppView";

const mapDispatchToProps = {
  switchNet,
  fetchTransaction,
  fetchBalance,
};

const mapStateToProps = (state: any) => ({
  eth: state.eth,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
