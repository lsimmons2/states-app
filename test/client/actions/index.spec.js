
import * as actions from '../../client/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import chai from 'chai'

const should = chai.should();
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('sync actions', () => {
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

});


describe('async actions', () => {

  describe('fetchMunis', () => {

    it('creates REQUEST_MUNIS and REQUEST_MUNIS_SUCCESS actions when valid response fetched', () => {

      afterEach( () => {
        nock.cleanAll()
      })

      nock('http://localhost:8080/states')
        .get('/Connecticut')
        .reply(200, [
            'City1',
            'City2',
            'Town1',
            'Town2'
        ])


        let expectedActions = [
          {
            type: 'REQUEST_MUNIS',
            state: 'Connecticut'
          },
          {
            type: 'REQUEST_MUNIS_SUCCESS',
            munis: [
                'City1',
                'City2',
                'Town1',
                'Town2'
            ]
          }
        ];

        let defInitialState = {
          selectedState: {
            name: null,
            isFetching: false,
            error: false,
            munis: null
          }};

        let store = mockStore(defInitialState)

        return store.dispatch(actions.fetchMunis('Connecticut'))
          .then( () => {
            let returnedActions = store.getActions();
            returnedActions.should.deep.equal(expectedActions);
          })
    })


    it('creates REQUEST_MUNIS and REQUEST_MUNIS_ERROR actions when error fetched', () => {

      afterEach( () => {
        nock.cleanAll()
      })

      const err = new Error('nah');

      nock('http://localhost:8080/states')
        .get('/Connecticut')
        .reply(500, err)


        let expectedActions = [
          {
            type: 'REQUEST_MUNIS',
            state: 'Connecticut'
          },
          {
            type: 'REQUEST_MUNIS_ERROR',
            error: err
          }
        ];

        let defInitialState = {
          selectedState: {
            name: null,
            isFetching: false,
            error: false,
            munis: null
          }};

        let store = mockStore(defInitialState)

        return store.dispatch(actions.fetchMunis('Connecticut'))
          .then( () => {
            let returnedActions = store.getActions();
            returnedActions.should.deep.equal(expectedActions);
          })
    })


  })

})
