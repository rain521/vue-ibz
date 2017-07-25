import Vue from 'vue'
import Router from 'vue-router'
import ReleaseEnquiries from '@/components/releaseEnquiries'
import Hall from '@/components/hall'
import MyContent from '@/components/myContent'
import IbzDetails from '@/components/myContent/ibzDetails'
import GrabSingle from '@/components/myContent/grabSingle'
import ReleaseSingle from '@/components/myContent/releaseSingle'
import LineItem from '@/components/myContent/lineItem'
import MyMessage from '@/components/myContent/myMessage'
import MyIntegral from '@/components/myContent/myIntegral'
import Jackpot from '@/components/myContent/jackpot'
import FixedPrice from '@/components/Details/fixedPrice'
import Bidding from '@/components/Details/bidding'
import Login from '@/components/login'
import Relevance from '@/components/relevance'
import RelevanceSucceed from '@/components/relevanceSucceed'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hall', title: '首页', component: Hall},
    {path: '/ReleaseEnquiries', name: 'ReleaseEnquiries', component: ReleaseEnquiries},
    {path: '/hall', name: 'Hall', component: Hall},
    {path: '/fixedPrice', name: 'FixedPrice', component: FixedPrice},
    {path: '/bidding', name: 'Bidding', component: Bidding},
    {path: '/myContent', name: 'MyContent', component: MyContent},
    {path: '/ibzDetails', name: 'IbzDetails', component: IbzDetails},
    {path: '/grabSingle', name: 'GrabSingle', component: GrabSingle},
    {path: '/releaseSingle', name: 'ReleaseSingle', component: ReleaseSingle},
    {path: '/lineItem', name: 'LineItem', component: LineItem},
    {path: '/myMessage', name: 'MyMessage', component: MyMessage},
    {path: '/login', name: 'Login', component: Login},
    {path: '/relevance', name: 'Relevance', component: Relevance},
    {path: '/relevanceSucceed', name: 'RelevanceSucceed', component: RelevanceSucceed},
    {path: '/myIntegral', name: 'MyIntegral', component: MyIntegral},
    {path: '/jackpot', name: 'Jackpot', component: Jackpot}
  ]
})
