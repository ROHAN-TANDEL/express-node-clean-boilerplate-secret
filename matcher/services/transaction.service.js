const db = require('../models/db');

async function getInterimStatus(req, res) {


    /**
     $clientDb = config('database.connections.client_db.schemaPrefix');
     $lineStatusMap = LineStatus::query()
     ->whereIn('status', [InterimLineStatus::CORRECT, InterimLineStatus::WARNING, InterimLineStatus::INCORRECT])
     ->pluck('id', 'status');

     $correct = $lineStatusMap[InterimLineStatus::CORRECT];
     $warning = $lineStatusMap[InterimLineStatus::WARNING];
     $inCorrect = $lineStatusMap[InterimLineStatus::INCORRECT];

     $query = InterimTransactionTaxReturnMapping::query()->withoutGlobalScope('ignoreDeletedFileTransactions')
     ->where('interim_transaction_tax_return_mapping.tax_return_id', $taxReturnId)
     ->leftJoin($clientDb.'transactions', function ($join) use ($taxReturnId) {
     $join->on('transactions.interim_transaction_id', '=', 'interim_transaction_tax_return_mapping.interim_transaction_id');
     $join->where('transactions.tax_return_id', $taxReturnId);
     });

     $query->when(! $countExcludedTransactions, function ($query) {
     $query->where(function ($q) {
     $q->where('interim_transaction_tax_return_mapping.is_excluded_from_return', '!=', 1)
     ->orWhereNull('interim_transaction_tax_return_mapping.is_excluded_from_return');
     });
     });

     if (count($countType) > 0) {
     $query->when(in_array('sync_count', $countType), function ($query) {
     $query->selectRaw('COUNT(case when transactions.is_sync= 1 and interim_transaction_tax_return_mapping.is_transformed = 1 then 1 end) as sync_count');
     });

     $query->when(in_array('un_sync_count', $countType), function ($query) {
     $query->selectRaw('COUNT(case when transactions.is_sync= 0 and interim_transaction_tax_return_mapping.is_transformed = 1 then 1 end) as un_sync_count');
     });

     $query->when(in_array('transformed_count', $countType), function ($query) {
     $query->selectRaw('COUNT(case when interim_transaction_tax_return_mapping.is_transformed= 1 then 1 end) as transformed_count');
     });

     //            $query->when(in_array('incorrect_count', $countType), function ($query) {
     //                $query->selectRaw("count(
     //					case
     //						when ls_line.status = '" . InterimLineStatus::INCORRECT . "' and ls_dataset.status = '" . InterimLineStatus::INCORRECT . "' then 1
     //						when ls_line.status = '" . InterimLineStatus::INCORRECT . "' and ls_dataset.status = '" . InterimLineStatus::CORRECT . "' then 1
     //						when ls_line.status = '" . InterimLineStatus::CORRECT . "' and ls_dataset.status = '" . InterimLineStatus::INCORRECT . "' then 1
     //					end
     //            	) as incorrect_count");
     //            });
     $query->when(in_array('incorrect_count', $countType), function ($query, $inCorrect) {
     $query->selectRaw("count(case when interim_transaction_tax_return_mapping.line_status_id = '".$inCorrect."' then 1 end) as incorrect_count");
     });

     //            $query->when(in_array('warning_count', $countType), function ($query) {
     //                $query->selectRaw("count(
     //					case
     //						when ls_line.status = '" . InterimLineStatus::WARNING . "' and ls_dataset.status <> '" . InterimLineStatus::INCORRECT . "' then 1
     //						when ls_dataset.status = '" . InterimLineStatus::WARNING . "' and ls_line.status <> '" . InterimLineStatus::INCORRECT . "' then 1
     //					end
     //					) as warning_count");
     //            });
     $query->when(in_array('warning_count', $countType), function ($query, $warning) {
     $query->selectRaw("count(case when interim_transaction_tax_return_mapping.line_status_id = '".$warning."' then 1 end) as warning_count");
     });
     //            $query->when(in_array('correct_count', $countType), function ($query) {
     //                $query->selectRaw("count(case when ls_line.status = '" . InterimLineStatus::CORRECT . "' and ls_dataset.status = '" . InterimLineStatus::CORRECT . "' then 1 end) as correct_count");
     //
     //            });
     $query->when(in_array('correct_count', $countType), function ($query, $correct) {
     $query->selectRaw("count(case when interim_transaction_tax_return_mapping.line_status_id = '".$correct."' then 1 end) as correct_count");
     });

     $query->when(in_array('total_count', $countType), function ($query) {
     $query->selectRaw('COUNT(interim_transaction_tax_return_mapping.id) as total_count');
     });

     return $query->first();
     */
}