<div class="dataTables_scroll">
	<div class="dataTables_scrollHead" style="overflow: hidden; position: relative; border: 0px; width: 100%;">
		<div class="dataTables_scrollHeadInner" style="box-sizing: content-box; width: 1067px; padding-right: 19px;">
			<table class="display nowrap dataTable no-footer" cellspacing="0" width="100%" role="grid" style="margin-left: 0px; width: 1067px;">
				<thead>
					<tr role="row">
					<?php foreach ($header as $field => $label): ?>
						<th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 73px;" aria-sort="ascending" aria-label="First name: activate to sort column descending">
							<?php print $label; ?>
						</th>
					<?php endforeach; ?>	
					</tr>
				</thead>
			</table>
		</div>
	</div>
	
	<div class="dataTables_scrollBody" style="position: relative; overflow: auto; width: 100%; height: 500px;">
		<table id="datatable-1" class="display nowrap dataTable no-footer" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style="width: 100%;">
			<thead>
				<tr role="row" style="height: 0px;">
				<?php foreach ($header as $field => $label): ?>
					<th class="sorting_asc" aria-controls="datatable-1" rowspan="1" colspan="1" style="width: 73px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;" aria-sort="ascending" aria-label="First name: activate to sort column descending">
						<div class="dataTables_sizing" style="height:0;overflow:hidden;">
							<?php print $label; ?>
						</div>
					</th>
				<?php endforeach; ?>
				</tr>
			</thead>
			
			<tbody>
		    <?php foreach ($rows as $count => $row): ?>
				<tr role="row" class="odd <?php print implode(' ', $row_classes[$count]); ?>">
				<?php foreach ($row as $field => $content): ?>
					<td class="sorting_1 views-field views-field-<?php print $fields[$field]; ?>">
						<?php print $content; ?>
					</td>
				<?php endforeach; ?>
				</tr>
		    <?php endforeach; ?>
			</tbody>
			<!-- Penambahan script kolom baru untuk MultiFilter DataTables added by Ade 24/10/2015 -->  
			<?php
			$options = $view->style_plugin->options;
			if ($options['elements']['multi_filter']) { ?>
			<tfoot>
				<tr>		
					<?php foreach ($header as $field => $label): ?>
						<th><input type="text" class="search_init" value="" /></th>
					<?php endforeach; ?>
				</tr>
			</tfoot>
			<?php } ?>
			<!-- END penambahan script kolom MultiFilter -->			
		</table>
	</div>
</div>
