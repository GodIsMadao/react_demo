/**
 * Created by Saintyun on 2017/3/13.
 */
import {Dispatcher} from 'flux'

class DispatcherClass extends Dispatcher{
    handleAction(action){
        this.dispatch(
            {
                type: action.type,
                payload: action.payload
            }
        );
    }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher