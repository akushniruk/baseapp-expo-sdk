// export const formatHistoryState = (tx: string, confirmations?: number | string, minConfirmations?: number) => {
//     const accepted = (
//         <div className="accepted">
//             <span className="label">
//                 {this.props.intl.formatMessage({ id: 'page.body.wallets.table.accepted' })}
//             </span>
//             <SucceedIcon />
//         </div>
//     );

//     const rejected = (
//         <div className="rejected">
//             <span className="label">
//                 {this.props.intl.formatMessage({ id: 'page.body.wallets.table.rejected' })}
//             </span>
//             <FailIcon />
//         </div>
//     );

//     const pending = (
//         <div className="pending">
//             <span className="label">
//                 {this.props.intl.formatMessage({ id: 'page.body.wallets.table.pending' })}
//             </span>
//             <PendingIcon />
//         </div>
//     );

//     const confirming = (
//         <div className="pending">
//             <span className="label">
//                 {this.props.intl.formatMessage({ id: 'page.body.wallets.table.confirming' })}
//             </span>
//             <PendingIcon />
//         </div>
//     );

//     const skipped = (
//         <div className="rejected">
//             <span className="label">
//                 {this.props.intl.formatMessage({ id: 'page.body.wallets.table.skipped' })}
//             </span>
//             <FailIcon />
//         </div>
//     );

//     const underReview = (
//         <div className="pending">
//             <span className="label">
//                 {this.props.intl.formatMessage({ id: 'page.body.wallets.table.under_review' })}
//             </span>
//             <PendingIcon />
//         </div>
//     );

//     const statusMapping = {
//         succeed: accepted,
//         failed: rejected,
//         accepted: accepted,
//         collected: accepted,
//         collecting: accepted,
//         canceled: rejected,
//         rejected: rejected,
//         processing: pending,
//         fee_processing: pending,
//         prepared: pending,
//         confirming: confirming,
//         submitted:
//             minConfirmations && confirmations && confirmations !== 'N/A'
//                 ? `${confirmations}/${minConfirmations}`
//                 : pending,
//         skipped: skipped,
//         errored: (
//             <span className="rejected">
//                 {this.props.intl.formatMessage({
//                     id: 'page.body.history.deposit.content.status.errored',
//                 })}
//             </span>
//         ),
//         under_review: underReview,
//     };

//     return statusMapping[tx];
// };
