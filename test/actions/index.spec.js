
import * as actions from '../../client/actions'



describe('requestMunis', () => {

  it('should create actions of type \'REQUEST_MUNIS\'', () => {

    let returnedAction = actions.requestMunis('Massachusetts');
    expect(returnedAction.type).toEqual('REQUEST_MUNIS');

  });

  it('should create actions with US state passed to it', () => {

    let returnedAction = actions.requestMunis('Massachusetts');
    expect(returnedAction.state).toEqual('Massachusetts');

  })

})



describe('requestMunisSuccess', () => {

  it('should create actions of type \'REQUEST_MUNIS_SUCCESS\'', () => {

    let returnedAction = actions.requestMunisSuccess('Vermont');
    expect(returnedAction.type).toEqual('REQUEST_MUNIS_SUCCESS');

  });

  it('should create actions with munis array', () => {

    let munis = [
      'Town1',
      'Town2',
      'City1',
      'City2'
    ];
    let returnedAction = actions.requestMunisSuccess(munis);
    expect(returnedAction.munis).toEqual(munis);

  })

})



describe('requestMunisError', () => {

  it('should create actions of type \'REQUEST_MUNIS_ERROR\'', () => {

    let returnedAction = actions.requestMunisError('Maine');
    expect(returnedAction.type).toEqual('REQUEST_MUNIS_ERROR');

  });

  it('should create actions with munis array', () => {

    let err = new Error('nah');
    let returnedAction = actions.requestMunisError(err);
    expect(returnedAction.error).toEqual(err);

  })

})
